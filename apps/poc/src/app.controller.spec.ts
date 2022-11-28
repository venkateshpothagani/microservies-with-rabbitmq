import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { billing } from './studs/billing.stud';

describe('OrdersController', () => {
	let appController: AppController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			imports: [],
			controllers: [AppController],
			providers: [
				{
					provide: AppService.name,
					useValue: {
						get: jest.fn(async () => {
							return [await billing()];
						}),

						add: jest.fn(async () => {
							return await billing();
						}),
					},
				},
			],
		}).compile();

		appController = app.get<AppController>(AppController);
	});

	it('is get function return valid response', async () => {
		expect(await appController.get()).toStrictEqual([await billing()]);
	});
});
