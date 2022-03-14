import { TestBed } from '@angular/core/testing';

import { Kt1254Service } from './kt-1254.service';

describe('Kt1254Service', () => {
  let service: Kt1254Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1254Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
