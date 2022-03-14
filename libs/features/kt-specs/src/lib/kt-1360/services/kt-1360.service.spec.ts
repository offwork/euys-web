import { TestBed } from '@angular/core/testing';

import { Kt1360Service } from './kt-1360.service';

describe('Kt1360Service', () => {
  let service: Kt1360Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1360Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
