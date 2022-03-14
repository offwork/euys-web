import { TestBed } from '@angular/core/testing';

import { Kt1364Service } from './kt-1364.service';

describe('Kt1364Service', () => {
  let service: Kt1364Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1364Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
