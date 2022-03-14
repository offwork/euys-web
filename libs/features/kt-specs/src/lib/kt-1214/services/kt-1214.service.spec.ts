import { TestBed } from '@angular/core/testing';

import { Kt1214Service } from './kt-1214.service';

describe('Kt1214Service', () => {
  let service: Kt1214Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1214Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
