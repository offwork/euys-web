import { TestBed } from '@angular/core/testing';

import { Kt1359Service } from './kt-1359.service';

describe('Kt1258Service', () => {
  let service: Kt1359Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1359Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
