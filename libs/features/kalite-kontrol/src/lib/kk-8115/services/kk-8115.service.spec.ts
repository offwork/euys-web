import { TestBed } from '@angular/core/testing';

import { Kk8115Service } from './kk-8115.service';

describe('Kk8115Service', () => {
  let service: Kk8115Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kk8115Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
