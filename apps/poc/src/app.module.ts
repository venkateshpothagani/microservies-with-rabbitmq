import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Bill } from './bill.entity';

import { config } from 'dotenv';

config();

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env['MYSQL_HOST'],
			port: parseInt(process.env['MYSQL_PORT']),
			username: process.env['MYSQL_USERNAME'],
			password: process.env['MYSQL_PASSWORD'],
			database: process.env['MYSQL_DATABASE'],
			entities: [Bill],
			synchronize: true,
			logging: true,
			logger: 'file',
		}),
		TypeOrmModule.forFeature([Bill]),
	],
	controllers: [AppController],
	providers: [
		{
			provide: AppService.name,
			useClass: AppService,
		},
	],
})
export class AppModule {}
