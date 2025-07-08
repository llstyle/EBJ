import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { HashService } from './hash.service';
import { AuthController } from './auth.controller';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [JwtModule.register({}), UsersModule, PassportModule, MailModule],
  providers: [AuthService, JwtStrategy, HashService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
