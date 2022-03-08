import { Test, TestingModule } from '@nestjs/testing';
import { ConstantController } from './constant.controller';

describe('ConstantController', () => {
  let controller: ConstantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConstantController],
    }).compile();

    controller = module.get<ConstantController>(ConstantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
