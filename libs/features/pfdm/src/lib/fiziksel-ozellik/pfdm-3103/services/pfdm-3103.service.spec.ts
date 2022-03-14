import { TestBed } from '@angular/core/testing';

import { Pfdm3103Service } from './pfdm-3103.service';

describe('Pfdm3103Service', () => {
  let service: Pfdm3103Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pfdm3103Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
