import { TestBed } from '@angular/core/testing';

import { Kt1231Service } from './kt-1231.service';

describe('Kt1231Service', () => {
  let service: Kt1231Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1231Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
