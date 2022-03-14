import { TestBed } from '@angular/core/testing';

import { Kk8102Service } from './kk-8102.service';

describe('Kk8102Service', () => {
  let service: Kk8102Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kk8102Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
