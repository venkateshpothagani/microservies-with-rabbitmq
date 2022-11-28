import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bill } from './bill.entity';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

import { config } from 'dotenv';

config();

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env['MYSQL_HOST'],
			port: parseInt(process.env['MYSQL_PORT']),
			username: process.env['MYSQL_USERNAME'],
			password: process.env['MYSQL_PASSWORD'],
			database: process.env['MYSQL_DATABASE'],
			entities: [Bill],
			synchronize: true,
			logging: true,
			logger: 'file',
		}),
		TypeOrmModule.forFeature([Bill]),
	],
	controllers: [BillingController],
	providers: [BillingService],
})
export class BillingModule {}
