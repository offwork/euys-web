import { TestBed } from '@angular/core/testing';

import { Kt1208Service } from './kt-1208.service';

describe('Kt1208Service', () => {
  let service: Kt1208Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1208Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
