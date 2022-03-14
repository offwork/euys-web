import { TestBed } from '@angular/core/testing';

import { Kt1238Service } from './kt-1238.service';

describe('Kt1238Service', () => {
  let service: Kt1238Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1238Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
