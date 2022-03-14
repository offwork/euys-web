import { TestBed } from '@angular/core/testing';

import { Kt1260Service } from './kt-1260.service';

describe('Kt1260Service', () => {
  let service: Kt1260Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1260Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
