import { TestBed } from '@angular/core/testing';

import { CuTarihGecikmeAnaliziService } from './cu-tarih-gecikme-analizi.service';

describe('CuTarihGecikmeAnaliziService', () => {
  let service: CuTarihGecikmeAnaliziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuTarihGecikmeAnaliziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
