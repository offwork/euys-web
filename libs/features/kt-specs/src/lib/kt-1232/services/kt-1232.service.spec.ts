import { TestBed } from '@angular/core/testing';

import { Kt1232Service } from './kt-1232.service';

describe('Kt1232Service', () => {
  let service: Kt1232Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1232Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
