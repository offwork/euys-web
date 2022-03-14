import { TestBed } from '@angular/core/testing';

import { Kt1242Service } from './kt-1242.service';

describe('Kt1242Service', () => {
  let service: Kt1242Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1242Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
