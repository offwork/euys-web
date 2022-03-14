import { TestBed } from '@angular/core/testing';

import { Kt1222Service } from './kt-1222.service';

describe('Kt1222Service', () => {
  let service: Kt1222Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1222Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
