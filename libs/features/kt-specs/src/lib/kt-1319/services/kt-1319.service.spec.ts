import { TestBed } from '@angular/core/testing';

import { Kt1319Service } from './kt-1319.service';

describe('Kt1319Service', () => {
  let service: Kt1319Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1319Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
