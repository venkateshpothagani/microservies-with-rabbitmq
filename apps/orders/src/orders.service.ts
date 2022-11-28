import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.model';
import { Product, ProductDocument } from './product.model';

@Injectable()
export class OrdersService {
	constructor(
		@InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>,
		@InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
		@Inject('ORDER_SERVICE') private orderClient: ClientProxy,
	) {}

	async add(data: any) {
		this.orderClient.emit('order_created', { data });
		console.log('order_created emitted');

		await this.productModel.deleteMany({ reference: data.product });

		return this.orderModel.create(data);
	}

	async get() {
		return this.orderModel.find().exec();
	}
}
