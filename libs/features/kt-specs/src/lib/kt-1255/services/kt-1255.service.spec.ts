import { TestBed } from '@angular/core/testing';

import { Kt1255Service } from './kt-1255.service';

describe('Kt1255Service', () => {
  let service: Kt1255Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1255Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
