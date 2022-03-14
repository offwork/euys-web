import { TestBed } from '@angular/core/testing';

import { Kk8101Service } from './kk-8101.service';

describe('Kk8101Service', () => {
  let service: Kk8101Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kk8101Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
