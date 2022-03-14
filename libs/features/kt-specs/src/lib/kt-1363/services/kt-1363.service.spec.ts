import { TestBed } from '@angular/core/testing';

import { Kt1363Service } from './kt-1363.service';

describe('Kt1363Service', () => {
  let service: Kt1363Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1363Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
