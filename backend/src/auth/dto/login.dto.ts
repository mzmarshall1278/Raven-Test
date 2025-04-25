import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Email must be valid' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  password: string;
}
