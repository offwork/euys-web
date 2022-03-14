import { TestBed } from '@angular/core/testing';

import { Kt1202Service } from './kt-1202.service';

describe('Kt1202Service', () => {
  let service: Kt1202Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1202Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
