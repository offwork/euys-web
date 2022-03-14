import { TestBed } from '@angular/core/testing';

import { Kt1223Service } from './kt-1223.service';

describe('Kt1223Service', () => {
  let service: Kt1223Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1223Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
