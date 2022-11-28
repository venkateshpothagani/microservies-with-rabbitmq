import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { config } from 'dotenv';

config();

async function bootstrap() {
	const app = await NestFactory.create(OrdersModule);
	app.setGlobalPrefix('api');
	await app.listen(process.env['ORDERS_PORT'], () => {
		const logger = new Logger();
		logger.log(`ORDERS SERVICE STARTED - http://localhost:${process.env['ORDERS_PORT']}/api/orders`);
	});
}

bootstrap();
