import { TestBed } from '@angular/core/testing';

import { Kt1245Service } from './kt-1245.service';

describe('Kt1245Service', () => {
  let service: Kt1245Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1245Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
