import { TestBed } from '@angular/core/testing';

import { Kt1221Service } from './kt-1221.service';

describe('Kt1221Service', () => {
  let service: Kt1221Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1221Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
