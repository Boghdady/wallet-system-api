import { IsEnum, IsNotEmpty, IsString, Min } from 'class-validator';
import { TransactionType } from '../enums/transaction-type.enum';

export class HandleTransactionDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @Min(1)
  amount: number;

  @IsNotEmpty()
  @IsString()
  transactionId: string;

  @IsNotEmpty()
  @IsEnum(TransactionType)
  type: TransactionType;
}
