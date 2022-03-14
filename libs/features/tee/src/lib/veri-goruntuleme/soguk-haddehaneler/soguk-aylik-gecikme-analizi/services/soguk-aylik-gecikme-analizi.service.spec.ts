import { TestBed } from '@angular/core/testing';

import { SogukAylikGecikmeAnaliziService } from './soguk-aylik-gecikme-analizi.service';

describe('SogukAylikGecikmeAnaliziService', () => {
  let service: SogukAylikGecikmeAnaliziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SogukAylikGecikmeAnaliziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
