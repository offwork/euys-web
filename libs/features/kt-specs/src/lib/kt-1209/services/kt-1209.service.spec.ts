import { TestBed } from '@angular/core/testing';

import { Kt1209Service } from './kt-1209.service';

describe('Kt1209Service', () => {
  let service: Kt1209Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1209Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
