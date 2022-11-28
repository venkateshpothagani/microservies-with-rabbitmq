import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './order.model';
import { Product, ProductSchema } from './product.model';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

import { config } from 'dotenv';

config();

@Module({
	imports: [
		MongooseModule.forRoot(process.env['MONGODB_URI'], {
			autoCreate: true,
		}),
		MongooseModule.forFeature([
			{ name: Order.name, schema: OrderSchema },
			{ name: Product.name, schema: ProductSchema },
		]),

		ClientsModule.register([
			{
				name: 'ORDER_SERVICE',
				transport: Transport.RMQ,
				options: {
					urls: [process.env['RABBIT_MQ_URI']],
					queue: 'main_queue',
					noAck: false,
					queueOptions: {
						durable: true,
					},
				},
			},
		]),
	],
	controllers: [OrdersController],
	providers: [
		{
			provide: 'ORDERS_SERVICE',
			useClass: OrdersService,
		},
	],
})
export class OrdersModule {}
