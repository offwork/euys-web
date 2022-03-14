import { TestBed } from '@angular/core/testing';

import { Kt1261Service } from './kt-1261.service';

describe('Kt1261Service', () => {
  let service: Kt1261Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1261Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
