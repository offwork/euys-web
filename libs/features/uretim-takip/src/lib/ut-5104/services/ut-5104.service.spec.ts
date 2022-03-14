import { TestBed } from '@angular/core/testing';

import { Ut5104Service } from './ut-5104.service';

describe('Ut5104Service', () => {
  let service: Ut5104Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut5104Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
