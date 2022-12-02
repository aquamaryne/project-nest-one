import { Test, TestingModule } from '@nestjs/testing';
import { NestOneService } from './nest-one.service';

describe('NestOneService', () => {
  let service: NestOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestOneService],
    }).compile();

    service = module.get<NestOneService>(NestOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
