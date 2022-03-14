import { TestBed } from '@angular/core/testing';

import { CuAylikGecikmeAnaliziService } from './cu-aylik-gecikme-analizi.service';

describe('CuAylikGecikmeAnaliziService', () => {
  let service: CuAylikGecikmeAnaliziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuAylikGecikmeAnaliziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
