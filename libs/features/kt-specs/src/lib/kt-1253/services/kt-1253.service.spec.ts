import { TestBed } from '@angular/core/testing';

import { Kt1253Service } from './kt-1253.service';

describe('Kt1253Service', () => {
  let service: Kt1253Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1253Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
