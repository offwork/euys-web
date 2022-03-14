import { TestBed } from '@angular/core/testing';

import { SogukTarihGecikmeAnaliziService } from './soguk-tarih-gecikme-analizi.service';

describe('SogukTarihGecikmeAnaliziService', () => {
  let service: SogukTarihGecikmeAnaliziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SogukTarihGecikmeAnaliziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
