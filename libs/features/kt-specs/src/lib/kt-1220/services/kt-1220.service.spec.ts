import { TestBed } from '@angular/core/testing';

import { Kt1220Service } from './kt-1220.service';

describe('Kt1220Service', () => {
  let service: Kt1220Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1220Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
