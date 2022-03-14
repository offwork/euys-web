import { TestBed } from '@angular/core/testing';

import { Kt1304Service } from './kt-1304.service';

describe('Kt1304Service', () => {
  let service: Kt1304Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1304Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
