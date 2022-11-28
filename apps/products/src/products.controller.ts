import { Controller, Body, Get, Post, Put, Inject } from '@nestjs/common';
import { Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
	constructor(@Inject('PRODUCT_SERVICE') private readonly productsService: ProductsService) {}

	@Post()
	async add(@Body() data: any) {
		return await this.productsService.add({
			...data,
			reference: Math.floor(Math.random() * 10000),
			timestamp: Date.now(),
		});
	}

	@Get()
	async get() {
		return await this.productsService.get();
	}
}
