import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config();

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('api');
	await app.listen(process.env['POC_PORT'], () => {
		const logger = new Logger();
		logger.log(`ORDERS SERVICE STARTED - http://localhost:${process.env['POC_PORT']}/api/poc`);
	});
}

bootstrap();
