import { TestBed } from '@angular/core/testing';

import { Kt1250Service } from './kt-1250.service';

describe('Kt1250Service', () => {
  let service: Kt1250Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1250Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
