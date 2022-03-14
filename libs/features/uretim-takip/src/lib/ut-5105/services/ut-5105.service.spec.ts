import { TestBed } from '@angular/core/testing';

import { Ut5105Service } from './ut-5105.service';

describe('Ut5105Service', () => {
  let service: Ut5105Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut5105Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
