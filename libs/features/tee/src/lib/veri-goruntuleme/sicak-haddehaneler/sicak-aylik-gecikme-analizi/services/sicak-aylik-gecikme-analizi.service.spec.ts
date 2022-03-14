import { TestBed } from '@angular/core/testing';

import { SicakAylikGecikmeAnaliziService } from './sicak-aylik-gecikme-analizi.service';

describe('SicakAylikGecikmeAnaliziService', () => {
  let service: SicakAylikGecikmeAnaliziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SicakAylikGecikmeAnaliziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
