import { TestBed } from '@angular/core/testing';

import { Kt1226Service } from './kt-1226.service';

describe('Kt1226Service', () => {
  let service: Kt1226Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1226Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
