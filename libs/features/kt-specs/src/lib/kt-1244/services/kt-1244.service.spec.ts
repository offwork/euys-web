import { TestBed } from '@angular/core/testing';

import { Kt1244Service } from './kt-1244.service';

describe('Kt1244Service', () => {
  let service: Kt1244Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1244Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
