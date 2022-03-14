import { TestBed } from '@angular/core/testing';

import { Kt1237Service } from './kt-1237.service';

describe('Kt1237Service', () => {
  let service: Kt1237Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1237Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
