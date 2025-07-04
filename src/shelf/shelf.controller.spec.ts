import { Test, TestingModule } from '@nestjs/testing';
import { ShelfController } from './shelf.controller';

describe('ShelfController', () => {
  let controller: ShelfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShelfController],
    }).compile();

    controller = module.get<ShelfController>(ShelfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
