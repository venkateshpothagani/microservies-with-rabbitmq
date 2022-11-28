import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { BillingModule } from './billing.module';

async function bootstrap() {
	const logger = new Logger();
	logger.debug(process.env['RABBIT_MQ_URI']);

	const app = await NestFactory.createMicroservice<MicroserviceOptions>(BillingModule, {
		transport: Transport.RMQ,
		options: {
			urls: [process.env['RABBIT_MQ_URI']],
			queue: 'main_queue',
			noAck: false,
			queueOptions: {
				durable: true,
			},
		},
	});

	await app.listen();
}

bootstrap();
