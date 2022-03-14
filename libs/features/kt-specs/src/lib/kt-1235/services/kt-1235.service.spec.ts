import { TestBed } from '@angular/core/testing';

import { Kt1235Service } from './kt-1235.service';

describe('Kt1235Service', () => {
  let service: Kt1235Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1235Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
