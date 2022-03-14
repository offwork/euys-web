import { TestBed } from '@angular/core/testing';

import { Ut5103Service } from './ut-5103.service';

describe('Ut5103Service', () => {
  let service: Ut5103Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut5103Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
