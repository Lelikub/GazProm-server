import { Test, TestingModule } from '@nestjs/testing';
import { ChimsService } from './chims.service';

describe('ChimsService', () => {
  let service: ChimsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChimsService],
    }).compile();

    service = module.get<ChimsService>(ChimsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
