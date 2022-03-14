import { TestBed } from '@angular/core/testing';

import { Kk8103Service } from './kk-8103.service';

describe('Kk8103Service', () => {
  let service: Kk8103Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kk8103Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
