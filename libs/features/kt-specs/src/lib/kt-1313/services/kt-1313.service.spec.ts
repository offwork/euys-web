import { TestBed } from '@angular/core/testing';

import { Kt1313Service } from './kt-1313.service';

describe('Kt1313Service', () => {
  let service: Kt1313Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1313Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
