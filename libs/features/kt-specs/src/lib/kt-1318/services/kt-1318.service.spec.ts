import { TestBed } from '@angular/core/testing';

import { Kt1318Service } from './kt-1318.service';

describe('Kt1318Service', () => {
  let service: Kt1318Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1318Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
