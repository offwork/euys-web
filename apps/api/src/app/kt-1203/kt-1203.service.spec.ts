import { Test, TestingModule } from '@nestjs/testing';
import { Kt1203Service } from './kt-1203.service';

describe('Kt1203Service', () => {
  let service: Kt1203Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Kt1203Service],
    }).compile();

    service = module.get<Kt1203Service>(Kt1203Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
