import { TestBed } from '@angular/core/testing';

import { Kt1258Service } from './kt-1258.service';

describe('Kt1258Service', () => {
  let service: Kt1258Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1258Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
