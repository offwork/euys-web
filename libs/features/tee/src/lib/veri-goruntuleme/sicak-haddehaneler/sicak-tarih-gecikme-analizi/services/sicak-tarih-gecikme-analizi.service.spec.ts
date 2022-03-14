import { TestBed } from '@angular/core/testing';

import { SicakTarihGecikmeAnaliziService } from './sicak-tarih-gecikme-analizi.service';

describe('SicakTarihGecikmeAnaliziService', () => {
  let service: SicakTarihGecikmeAnaliziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SicakTarihGecikmeAnaliziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
