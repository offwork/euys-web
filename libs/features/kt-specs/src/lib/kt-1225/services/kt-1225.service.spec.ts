import { TestBed } from '@angular/core/testing';

import { Kt1225Service } from './kt-1225.service';

describe('Kt1225Service', () => {
  let service: Kt1225Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1225Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
