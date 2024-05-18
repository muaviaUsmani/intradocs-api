import { Test, TestingModule } from '@nestjs/testing';
import { DefaultController } from './default.controller';
import { DefaultService } from './default.service';

describe('DefaultController', () => {
  let defaultController: DefaultController;

  beforeEach(async () => {
    const defaultModule: TestingModule = await Test.createTestingModule({
      controllers: [DefaultController],
      providers: [DefaultService],
    }).compile();

    defaultController = defaultModule.get<DefaultController>(DefaultController);
  });

  describe('root', () => {
    it('should return "Hello Intradocs!"', () => {
      expect(defaultController.getIntradocs()).toBe('Hello Intradocs!');
    });
  });
});
