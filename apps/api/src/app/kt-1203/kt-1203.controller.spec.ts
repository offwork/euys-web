import { Test, TestingModule } from '@nestjs/testing';
import { Kt1203Controller } from './kt-1203.controller';

describe('Kt1203Controller', () => {
  let controller: Kt1203Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Kt1203Controller],
    }).compile();

    controller = module.get<Kt1203Controller>(Kt1203Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
