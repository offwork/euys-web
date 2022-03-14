import { TestBed } from '@angular/core/testing';

import { Pfdm3102Service } from './pfdm-3102.service';

describe('Pfdm3102Service', () => {
  let service: Pfdm3102Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pfdm3102Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
