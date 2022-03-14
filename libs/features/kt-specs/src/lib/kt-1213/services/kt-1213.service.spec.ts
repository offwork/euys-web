import { TestBed } from '@angular/core/testing';

import { Kt1213Service } from './kt-1213.service';

describe('Kt1213Service', () => {
  let service: Kt1213Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1213Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
