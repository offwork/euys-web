import { TestBed } from '@angular/core/testing';

import { Kt1204Service } from './kt-1204.service';

describe('Kt1204Service', () => {
  let service: Kt1204Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1204Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
