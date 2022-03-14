import { TestBed } from '@angular/core/testing';

import { Kt1246Service } from './kt-1246.service';

describe('Kt1246Service', () => {
  let service: Kt1246Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1246Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
