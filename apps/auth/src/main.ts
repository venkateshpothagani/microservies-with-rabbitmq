import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';

import { config } from 'dotenv';
import { Logger } from '@nestjs/common';

config();

async function bootstrap() {
	const app = await NestFactory.create(AuthModule);
	app.setGlobalPrefix('api');
	await app.listen(process.env['AUTH_PORT'], () => {
		const logger = new Logger();
		logger.log(`AUTH SERVICE STARTED - http://localhost:${process.env['AUTH_PORT']}/api/auth`);
	});
}

bootstrap();
