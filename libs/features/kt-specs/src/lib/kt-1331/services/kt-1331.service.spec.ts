import { TestBed } from '@angular/core/testing';

import { Kt1331Service } from './kt-1331.service';

describe('Kt1331Service', () => {
  let service: Kt1331Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1331Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
