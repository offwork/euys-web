import { TestBed } from '@angular/core/testing';

import { Pfdm3101Service } from './pfdm-3101.service';

describe('Pfdm3101Service', () => {
  let service: Pfdm3101Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pfdm3101Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
