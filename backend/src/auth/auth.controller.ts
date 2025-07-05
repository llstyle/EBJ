// src/auth/auth.controller.ts
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  UnauthorizedException,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.guard';
import { JwtRefreshGuard } from './guards/refresh.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthDto } from './dto/auth.dto';
import { GetUser } from './decorators/get-user.decorator';
import { User } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('signin')
  signin(@Body() data: AuthDto) {
    return this.authService.signIn(data);
  }

  @Get('logout')
  logout(@GetUser('userId') userId: string) {
    this.authService.logout(userId);
  }
  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  refreshTokens(@GetUser('userId') userId: string, @GetUser('refreshToken') refreshToken: string) {
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
