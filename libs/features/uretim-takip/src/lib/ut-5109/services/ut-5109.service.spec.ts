import { TestBed } from '@angular/core/testing';

import { Ut5109Service } from './ut-5109.service';

describe('Ut5109Service', () => {
  let service: Ut5109Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut5109Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
