import { TestBed } from '@angular/core/testing';

import { Ut5107Service } from './ut-5107.service';

describe('Ut5107Service', () => {
  let service: Ut5107Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut5107Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
