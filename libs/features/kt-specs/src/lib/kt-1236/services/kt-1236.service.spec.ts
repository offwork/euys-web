import { TestBed } from '@angular/core/testing';

import { Kt1236Service } from './kt-1236.service';

describe('Kt1236Service', () => {
  let service: Kt1236Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1236Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
