import { TestBed } from '@angular/core/testing';

import { Kt1303Service } from './kt-1303.service';

describe('Kt1303Service', () => {
  let service: Kt1303Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1303Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
