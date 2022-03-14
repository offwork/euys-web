import { TestBed } from '@angular/core/testing';

import { DuTarihGecikmeAnaliziService } from './du-tarih-gecikme-analizi.service';

describe('DuTarihGecikmeAnaliziService', () => {
  let service: DuTarihGecikmeAnaliziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuTarihGecikmeAnaliziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
