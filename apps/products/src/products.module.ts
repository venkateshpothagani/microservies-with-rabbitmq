import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './product.model';
import { config } from 'dotenv';

config();

@Module({
	imports: [
		MongooseModule.forRoot(process.env['MONGODB_URI'], {
			autoCreate: true,
		}),
		MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
	],
	controllers: [ProductsController],
	providers: [
		{
			provide: 'PRODUCT_SERVICE',
			useClass: ProductsService,
		},
	],
})
export class ProductsModule {}
