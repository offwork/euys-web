import { TestBed } from '@angular/core/testing';

import { Kt1248Service } from './kt-1248.service';

describe('Kt1248Service', () => {
  let service: Kt1248Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1248Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
