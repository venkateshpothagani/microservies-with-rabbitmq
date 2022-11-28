import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('data')
export class AppController {
	constructor(@Inject(AppService.name) private readonly appService: AppService) {}

	@Get('billing')
	async get() {
		return await this.appService.get();
	}
}
