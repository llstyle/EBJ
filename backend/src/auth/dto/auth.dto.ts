import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}