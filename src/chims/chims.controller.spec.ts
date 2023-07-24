import { Test, TestingModule } from '@nestjs/testing';
import { ChimsController } from './chims.controller';

describe('ChimsController', () => {
  let controller: ChimsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChimsController],
    }).compile();

    controller = module.get<ChimsController>(ChimsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
