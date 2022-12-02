import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestOneModule } from './nest-one/nest-one.module';

@Module({
  imports: [NestOneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
