import { TestBed } from '@angular/core/testing';

import { HedefFiiliGrafikService } from './hedef-fiili-grafik.service';

describe('HedefFiiliGrafikService', () => {
  let service: HedefFiiliGrafikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HedefFiiliGrafikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
