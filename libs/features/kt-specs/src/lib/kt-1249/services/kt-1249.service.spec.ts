import { TestBed } from '@angular/core/testing';

import { Kt1249Service } from './kt-1249.service';

describe('Kt1249Service', () => {
  let service: Kt1249Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1249Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
