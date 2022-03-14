import { TestBed } from '@angular/core/testing';

import { Pfdm3104Service } from './pfdm-3104.service';

describe('Pfdm3104Service', () => {
  let service: Pfdm3104Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pfdm3104Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
