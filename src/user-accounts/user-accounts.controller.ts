import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserAccountService } from './services/user-account.service';
import { CreateUserAccountDto } from './dtos/create-user-account.dto';

@Controller('user-accounts')
export class UserAccountsController {
  constructor(private readonly userAccountsService: UserAccountService) {}

  @Post()
  async createAccount(@Body() createAccountDto: CreateUserAccountDto) {
    return this.userAccountsService.createAccount(createAccountDto);
  }

  @Get('my-account/:userId')
  async getMyAccount(@Param('userId') userId: string) {
    return await this.userAccountsService.getMyAccount(userId);
  }
}
