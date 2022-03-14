import { TestBed } from '@angular/core/testing';

import { Ut6112Service } from './ut-6112.service';

describe('Ut6112Service', () => {
  let service: Ut6112Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut6112Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
