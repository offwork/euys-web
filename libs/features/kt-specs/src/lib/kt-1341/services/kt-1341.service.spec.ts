import { TestBed } from '@angular/core/testing';

import { Kt1341Service } from './kt-1341.service';

describe('Kt1341Service', () => {
  let service: Kt1341Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1341Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
