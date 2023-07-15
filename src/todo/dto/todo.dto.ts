import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export default class todoDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  title: string;

  @IsNumber()
  @IsNotEmpty()
  categoriesId: number;
}
