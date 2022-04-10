import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankAccount } from '../../models/bank-account.model';

@Controller('bank-accounts')
export class BankAccountController {
  constructor(
    @InjectRepository(BankAccount)
    private bankAccountRepo: Repository<BankAccount>,
  ) {}
  @Get()
  index() {
    return this.bankAccountRepo.find();
  }

  @Get()
  show() {}
}
