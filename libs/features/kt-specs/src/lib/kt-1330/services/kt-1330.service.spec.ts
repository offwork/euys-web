import { TestBed } from '@angular/core/testing';

import { Kt1330Service } from './kt-1330.service';

describe('Kt1330Service', () => {
  let service: Kt1330Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1330Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
