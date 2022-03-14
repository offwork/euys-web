import { TestBed } from '@angular/core/testing';

import { Kt1205Service } from './kt-1205.service';

describe('Kt1205Service', () => {
  let service: Kt1205Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1205Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
