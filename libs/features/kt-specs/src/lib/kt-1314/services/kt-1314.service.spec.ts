import { TestBed } from '@angular/core/testing';

import { Kt1314Service } from './kt-1314.service';

describe('Kt1314Service', () => {
  let service: Kt1314Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1314Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
