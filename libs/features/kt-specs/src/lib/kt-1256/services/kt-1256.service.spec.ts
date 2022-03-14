import { TestBed } from '@angular/core/testing';

import { Kt1256Service } from './kt-1256.service';

describe('Kt1256Service', () => {
  let service: Kt1256Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1256Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
