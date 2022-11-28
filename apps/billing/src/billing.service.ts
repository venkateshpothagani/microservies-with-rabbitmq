import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bill } from './bill.entity';

@Injectable()
export class BillingService {
	constructor(
		@InjectRepository(Bill)
		private readonly billRepository: Repository<Bill>,
	) {}

	async add(data: any) {
		return this.billRepository.save(data);
	}
}
