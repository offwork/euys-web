import { TestBed } from '@angular/core/testing';

import { KapasitelerService } from './kapasiteler.service';

describe('KapasitelerService', () => {
  let service: KapasitelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KapasitelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
