import { TestBed } from '@angular/core/testing';

import { Kt1344Service } from './kt-1344.service';

describe('Kt1344Service', () => {
  let service: Kt1344Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1344Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
