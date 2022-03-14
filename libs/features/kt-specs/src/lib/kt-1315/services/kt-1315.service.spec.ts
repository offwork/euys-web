import { TestBed } from '@angular/core/testing';

import { Kt1315Service } from './kt-1315.service';

describe('Kt1315Service', () => {
  let service: Kt1315Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1315Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
