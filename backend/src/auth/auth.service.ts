import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { HashService } from './hash.service';
import { ConfigService } from '@nestjs/config';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Role } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private hashService: HashService,
    private configService: ConfigService,
  ) {}
	async signIn(data: AuthDto) {
    const user = await this.usersService.findByEmail(data.email);
    if (!user) throw new BadRequestException('User does not exist');
    const passwordMatches = await this.hashService.compare(data.password, user.password);
    if (!passwordMatches)
      throw new BadRequestException('Password is incorrect');
    const tokens = await this.getTokens(user.id, user.email, user.role);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }
  async signUp(createUserDto: CreateUserDto): Promise<any> {
    const userExists = await this.usersService.findByEmail(
      createUserDto.email,
    );
    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const hash = await this.hashService.hash(createUserDto.password);
    const newUser = await this.usersService.create({
      ...createUserDto,
      password: hash,
    });
    const tokens = await this.getTokens(newUser.id, newUser.email, newUser.role);
    await this.updateRefreshToken(newUser.id, tokens.refreshToken);
    return tokens;
  }
  async logout(userId: string) {
    return this.usersService.update(userId, { refreshToken: null });
  }
  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await this.hashService.hash(refreshToken);
    await this.usersService.update(userId, {
      refreshToken: hashedRefreshToken,
    });
  }
  async getTokens(userId: string, email: string, role: Role) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
          role,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
          role,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.usersService.findById(userId);
    if (!user || !user.refreshToken)
      throw new ForbiddenException('Access Denied');
    const refreshTokenMatches = await this.hashService.compare(refreshToken, user.refreshToken);
    if (!refreshTokenMatches) throw new ForbiddenException('Access Denied');
    const tokens = await this.getTokens(user.id, user.email, user.role);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }
}
