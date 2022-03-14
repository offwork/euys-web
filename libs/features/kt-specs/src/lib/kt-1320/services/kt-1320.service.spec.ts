import { TestBed } from '@angular/core/testing';

import { Kt1320Service } from './kt-1320.service';

describe('Kt1320Service', () => {
  let service: Kt1320Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1320Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
