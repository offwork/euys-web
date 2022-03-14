import { TestBed } from '@angular/core/testing';

import { Kt1247Service } from './kt-1247.service';

describe('Kt1247Service', () => {
  let service: Kt1247Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1247Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
