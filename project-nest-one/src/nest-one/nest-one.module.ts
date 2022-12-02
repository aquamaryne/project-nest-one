import { Module } from '@nestjs/common';
import { NestOneService } from './nest-one.service';
import { NestOneController } from './nest-one.controller';

@Module({
  controllers: [NestOneController],
  providers: [NestOneService]
})
export class NestOneModule {}
