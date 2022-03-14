import { TestBed } from '@angular/core/testing';

import { Kt1241Service } from './kt-1241.service';

describe('Kt1241Service', () => {
  let service: Kt1241Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1241Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
