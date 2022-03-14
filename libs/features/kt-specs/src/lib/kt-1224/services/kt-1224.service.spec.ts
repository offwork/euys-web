import { TestBed } from '@angular/core/testing';

import { Kt1224Service } from './kt-1224.service';

describe('Kt1224Service', () => {
  let service: Kt1224Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1224Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
