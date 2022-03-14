import { TestBed } from '@angular/core/testing';

import { Kk8117Service } from './kk-8117.service';

describe('Kk8117Service', () => {
  let service: Kk8117Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kk8117Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
