import { TestBed } from '@angular/core/testing';

import { Kt1243Service } from './kt-1243.service';

describe('Kt1243Service', () => {
  let service: Kt1243Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1243Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
