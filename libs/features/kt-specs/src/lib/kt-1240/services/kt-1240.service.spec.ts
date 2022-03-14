import { TestBed } from '@angular/core/testing';

import { Kt1240Service } from './kt-1240.service';

describe('Kt1240Service', () => {
  let service: Kt1240Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1240Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
