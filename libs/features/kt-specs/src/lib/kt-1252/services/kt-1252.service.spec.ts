import { TestBed } from '@angular/core/testing';

import { Kt1252Service } from './kt-1252.service';

describe('Kt1252Service', () => {
  let service: Kt1252Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1252Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
