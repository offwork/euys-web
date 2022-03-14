import { TestBed } from '@angular/core/testing';

import { Kt1239Service } from './kt-1239.service';

describe('Kt1239Service', () => {
  let service: Kt1239Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1239Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
