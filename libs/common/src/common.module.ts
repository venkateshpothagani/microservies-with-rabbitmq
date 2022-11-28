import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  providers: [CommonService],
  exports: [CommonService],
  imports: [RabbitmqModule],
})
export class CommonModule {}
