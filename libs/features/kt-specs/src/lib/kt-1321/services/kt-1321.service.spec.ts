import { TestBed } from '@angular/core/testing';

import { Kt1321Service } from './kt-1321.service';

describe('Kt1321Service', () => {
  let service: Kt1321Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1321Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
