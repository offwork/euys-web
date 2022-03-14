import { TestBed } from '@angular/core/testing';

import { HedeflerService } from './hedefler.service';

describe('HedeflerService', () => {
  let service: HedeflerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HedeflerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
