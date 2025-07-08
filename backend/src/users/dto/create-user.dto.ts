import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;  
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password: string;
  refreshToken: string | null;
  resetToken: string | null;
}