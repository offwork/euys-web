import { TestBed } from '@angular/core/testing';

import { Kk8141Service } from './kk-8141.service';

describe('Kk8141Service', () => {
  let service: Kk8141Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kk8141Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
