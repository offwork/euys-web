import { TestBed } from '@angular/core/testing';

import { Kt1201Service } from './kt-1201.service';

describe('Kt1201Service', () => {
  let service: Kt1201Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1201Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
