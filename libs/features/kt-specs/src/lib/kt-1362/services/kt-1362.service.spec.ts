import { TestBed } from '@angular/core/testing';

import { Kt1362Service } from './kt-1362.service';

describe('Kt1362Service', () => {
  let service: Kt1362Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1362Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
