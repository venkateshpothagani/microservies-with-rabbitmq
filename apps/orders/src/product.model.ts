import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product {
	@Prop()
	reference: number;

	@Prop()
	name: string;

	@Prop()
	amount: number;

	@Prop()
	timestamp: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

export type ProductDocument = Product & Document;
