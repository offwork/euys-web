import { TestBed } from '@angular/core/testing';

import { Kt1230Service } from './kt-1230.service';

describe('Kt1230Service', () => {
  let service: Kt1230Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1230Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
