import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Animal {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  species: string;

  @IsNotEmpty()
  @IsString()
  happiness: number;
}
