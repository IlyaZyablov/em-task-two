import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Имя является обязательным для заполнения полем' })
  @IsString()
  readonly firstName: string;

  @IsNotEmpty({ message: 'Фамилия является обязательным для заполнения полем' })
  @IsString()
  readonly lastName: string;

  @IsNotEmpty({ message: 'Возраст является обязательным для заполнения полем' })
  @IsNumber()
  readonly age: number;

  @IsNotEmpty({ message: 'Возраст является обязательным для заполнения полем' })
  @IsNumber()
  readonly gender: number;

  @IsOptional()
  @IsBoolean()
  readonly haveProblems: boolean;
}
