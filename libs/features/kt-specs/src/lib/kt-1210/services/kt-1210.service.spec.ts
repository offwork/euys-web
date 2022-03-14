import { TestBed } from '@angular/core/testing';

import { Kt1210Service } from './kt-1210.service';

describe('Kt1210Service', () => {
  let service: Kt1210Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1210Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
