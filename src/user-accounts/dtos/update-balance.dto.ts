import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class UpdateBalanceDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  amount: number;
}
