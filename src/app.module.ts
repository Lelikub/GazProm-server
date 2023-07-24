import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChimsModule } from './chims/chims.module';

@Module({
  imports: [ChimsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
