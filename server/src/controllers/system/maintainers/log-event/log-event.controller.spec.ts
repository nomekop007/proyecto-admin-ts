import { Test, TestingModule } from '@nestjs/testing';
import { LogEventController } from './log-event.controller';

describe('LogEventController', () => {
  let controller: LogEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogEventController],
    }).compile();

    controller = module.get<LogEventController>(LogEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
