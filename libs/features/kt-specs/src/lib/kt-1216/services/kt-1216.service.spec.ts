import { TestBed } from '@angular/core/testing';

import { Kt1216Service } from './kt-1216.service';

describe('Kt1216Service', () => {
  let service: Kt1216Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1216Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
