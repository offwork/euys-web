import { TestBed } from '@angular/core/testing';

import { Kt1332Service } from './kt-1332.service';

describe('Kt1332Service', () => {
  let service: Kt1332Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1332Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
