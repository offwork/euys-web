import { TestBed } from '@angular/core/testing';

import { Kt1211Service } from './kt-1211.service';

describe('Kt1211Service', () => {
  let service: Kt1211Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1211Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
