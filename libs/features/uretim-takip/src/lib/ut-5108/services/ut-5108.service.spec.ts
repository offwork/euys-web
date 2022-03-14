import { TestBed } from '@angular/core/testing';

import { Ut5108Service } from './ut-5108.service';

describe('Ut5108Service', () => {
  let service: Ut5108Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut5108Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
