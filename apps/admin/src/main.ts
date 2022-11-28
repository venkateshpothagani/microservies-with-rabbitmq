import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AdminModule } from './admin.module';
import { config } from 'dotenv';

config();

async function bootstrap() {
	const app = await NestFactory.create(AdminModule);
	app.setGlobalPrefix('api');
	await app.listen(process.env['ADMIN_PORT'], () => {
		const logger = new Logger();
		logger.log(`ADMIN SERVICE STARTED - http://localhost:${process.env['ADMIN_PORT']}/api/admin`);
	});
}

bootstrap();
