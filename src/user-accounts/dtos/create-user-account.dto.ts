import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserAccountDto {
  @IsNotEmpty()
  @IsString()
  userId: string;
}
