import { TestBed } from '@angular/core/testing';

import { Kt1212Service } from './kt-1212.service';

describe('Kt1212Service', () => {
  let service: Kt1212Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1212Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
