import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bill } from './bill.entity';

@Injectable()
export class AppService {
	constructor(
		@InjectRepository(Bill)
		private readonly billRepository: Repository<Bill>,
	) {}

	async get() {
		return this.billRepository.find();
	}
}
