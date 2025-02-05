import { Body, Controller, Post } from '@nestjs/common';
import { AccountTransactionsService } from './account-transactions.service';
import { HandleTransactionDto } from './dtos/handle-transaction.dto';
import { TransactionType } from './enums/transaction-type.enum';

@Controller('account-transactions')
export class AccountTransactionsController {
  constructor(
    private readonly accountTransactionsService: AccountTransactionsService,
  ) {}

  @Post()
  async handleTransaction(@Body() handleTransactionDto: HandleTransactionDto) {
    const { userId, amount, transactionId, type } = handleTransactionDto;

    if (type === TransactionType.TOP_UP)
      return this.accountTransactionsService.topUp({
        userId,
        amount,
        transactionId,
      });

    return this.accountTransactionsService.charge({
      userId,
      amount,
      transactionId,
    });
  }
}
