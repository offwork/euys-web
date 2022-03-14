import { TestBed } from '@angular/core/testing';

import { Kt1302Service } from './kt-1302.service';

describe('Kt1302Service', () => {
  let service: Kt1302Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1302Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
