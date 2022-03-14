import { TestBed } from '@angular/core/testing';

import { Kk8104Service } from './kk-8104.service';

describe('Kk8104Service', () => {
  let service: Kk8104Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kk8104Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
