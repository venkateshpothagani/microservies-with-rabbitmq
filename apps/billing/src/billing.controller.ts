import { Body, Controller, Get, Post } from '@nestjs/common';
import { Payload, RmqContext, Ctx, EventPattern } from '@nestjs/microservices';
import { BillingService } from './billing.service';
import { Logger } from '@nestjs/common/services';

@Controller('billing')
export class BillingController {
	constructor(private readonly billingService: BillingService) {}

	@EventPattern('order_created')
	async add(@Payload() data: any, @Ctx() context: RmqContext) {
		const logger = new Logger();
		logger.debug(data.data);
		logger.debug('order_created worked');

		await this.billingService.add({
			order: data.data.reference,
			amount: data.data.amount,
			reference: Math.floor(Math.random() * 10000),
			timestamp: new Date(),
		});

		const channel = context.getChannelRef();
		const originalMessage = context.getMessage();
		channel.ack(originalMessage);
	}
}
