import { TestBed } from '@angular/core/testing';

import { Kt1233Service } from './kt-1233.service';

describe('Kt1233Service', () => {
  let service: Kt1233Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1233Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
