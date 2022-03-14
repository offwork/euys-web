import { TestBed } from '@angular/core/testing';

import { DuAylikGecikmeAnaliziService } from './du-aylik-gecikme-analizi.service';

describe('DuAylikGecikmeAnaliziService', () => {
  let service: DuAylikGecikmeAnaliziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuAylikGecikmeAnaliziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
