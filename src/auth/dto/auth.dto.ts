import { IsEmail, IsNotEmpty } from 'class-validator';

export class authDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  name: string;

  @IsNotEmpty()
  password: string;
}
