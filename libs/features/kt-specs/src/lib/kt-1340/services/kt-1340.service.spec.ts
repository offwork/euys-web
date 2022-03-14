import { TestBed } from '@angular/core/testing';

import { Kt1340Service } from './kt-1340.service';

describe('Kt1340Service', () => {
  let service: Kt1340Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1340Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
