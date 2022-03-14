import { TestBed } from '@angular/core/testing';

import { Kt1207Service } from './kt-1207.service';

describe('Kt1207Service', () => {
  let service: Kt1207Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1207Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
