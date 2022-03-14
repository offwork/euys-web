import { TestBed } from '@angular/core/testing';

import { Kt1219Service } from './kt-1219.service';

describe('Kt1219Service', () => {
  let service: Kt1219Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1219Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
