import { IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {
  token: string;

  @IsString()
  @MinLength(6)
  newPassword: string;
}
