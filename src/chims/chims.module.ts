import { Module } from '@nestjs/common';
import { ChimsService } from './chims.service';
import { ChimsController } from './chims.controller';

@Module({
    providers: [ChimsService],
    controllers: [ChimsController]
})
export class ChimsModule {}
