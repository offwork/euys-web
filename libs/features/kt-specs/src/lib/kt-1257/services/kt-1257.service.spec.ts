import { TestBed } from '@angular/core/testing';

import { Kt1257Service } from './kt-1257.service';

describe('Kt1257Service', () => {
  let service: Kt1257Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1257Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
