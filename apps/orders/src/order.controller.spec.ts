import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { order } from './studs/order.stud';

describe('OrdersController', () => {
	let ordersController: OrdersController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			imports: [],
			controllers: [OrdersController],
			providers: [
				{
					provide: 'ORDERS_SERVICE',
					useValue: {
						get: jest.fn(async () => {
							return [await order()];
						}),

						add: jest.fn(async () => {
							return await order();
						}),
					},
				},
			],
		}).compile();

		ordersController = app.get<OrdersController>(OrdersController);
	});

	it('is get function return valid response', async () => {
		expect(await ordersController.get()).toStrictEqual([await order()]);
	});

	it('is add function return valid response', async () => {
		expect(await ordersController.add(await order())).toStrictEqual(await order());
	});
});
