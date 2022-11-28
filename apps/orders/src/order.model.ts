import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Order {
	@Prop()
	reference: number;

	@Prop()
	product: number;

	@Prop()
	amount: string;

	@Prop()
	timestamp: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

export type OrderDocument = Order & Document;
