import { Test, TestingModule } from '@nestjs/testing';
import { NestOneController } from './nest-one.controller';
import { NestOneService } from './nest-one.service';

describe('NestOneController', () => {
  let controller: NestOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NestOneController],
      providers: [NestOneService],
    }).compile();

    controller = module.get<NestOneController>(NestOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
