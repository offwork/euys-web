import { TestBed } from '@angular/core/testing';

import { Kt1312Service } from './kt-1312.service';

describe('Kt1312Service', () => {
  let service: Kt1312Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1312Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
