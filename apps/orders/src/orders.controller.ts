import { Body, Controller, Get, Post, Inject } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
	constructor(@Inject('ORDERS_SERVICE') private readonly ordersService: OrdersService) {}

	@Post()
	async add(@Body() data: any) {
		return await this.ordersService.add({
			...data,
			reference: Math.floor(Math.random() * 10000),
			timestamp: Date.now(),
		});
	}

	@Get()
	async get() {
		return await this.ordersService.get();
	}
}
