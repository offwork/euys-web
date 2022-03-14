import { TestBed } from '@angular/core/testing';

import { Kt1301Service } from './kt-1301.service';

describe('Kt1301Service', () => {
  let service: Kt1301Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1301Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
