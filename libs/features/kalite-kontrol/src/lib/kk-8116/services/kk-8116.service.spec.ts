import { TestBed } from '@angular/core/testing';

import { Kk8116Service } from './kk-8116.service';

describe('Kk8116Service', () => {
  let service: Kk8116Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kk8116Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
