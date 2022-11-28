import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products.module';
import { config } from 'dotenv';

config();

async function bootstrap() {
	const app = await NestFactory.create(ProductsModule);
	app.setGlobalPrefix('api');
	await app.listen(process.env['PRODUCTS_PORT'], () => {
		const logger = new Logger();
		logger.log(`ORDERS SERVICE STARTED - http://localhost:${process.env['PRODUCTS_PORT']}/api/products`);
	});
}

bootstrap();
