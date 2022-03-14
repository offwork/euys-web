import { TestBed } from '@angular/core/testing';

import { Kk8140Service } from './kk-8140.service';

describe('Kk8140Service', () => {
  let service: Kk8140Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kk8140Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
