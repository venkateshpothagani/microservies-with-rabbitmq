import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { product } from './studs/product.stud';

describe('ProductsController', () => {
	let productsController: ProductsController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			imports: [],
			controllers: [ProductsController],
			providers: [
				{
					provide: 'PRODUCT_SERVICE',
					useValue: {
						get: jest.fn(async () => {
							return [await product()];
						}),

						add: jest.fn(async () => {
							return await product();
						}),
					},
				},
			],
		}).compile();

		productsController = app.get<ProductsController>(ProductsController);
	});
	it('is get function return valid response', async () => {
		expect(await productsController.get()).toStrictEqual(await product());
	});

	it('is add function return valid response', async () => {
		expect(await productsController.add(await product())).toStrictEqual(await product());
	});
});
