import { TestBed } from '@angular/core/testing';

import { Ut5101Service } from './ut-5101.service';

describe('Ut5101Service', () => {
  let service: Ut5101Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut5101Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
