import { TestBed } from '@angular/core/testing';

import { Kt1234Service } from './kt-1234.service';

describe('Kt1234Service', () => {
  let service: Kt1234Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1234Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
