import { TestBed } from '@angular/core/testing';

import { Kt1307Service } from './kt-1307.service';

describe('Kt1307Service', () => {
  let service: Kt1307Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1307Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
