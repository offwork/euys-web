import { TestBed } from '@angular/core/testing';

import { Kt1259Service } from './kt-1259.service';

describe('Kt1259Service', () => {
  let service: Kt1259Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1259Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
