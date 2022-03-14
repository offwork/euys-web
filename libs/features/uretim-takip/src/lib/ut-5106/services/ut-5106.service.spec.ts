import { TestBed } from '@angular/core/testing';

import { Ut5106Service } from './ut-5106.service';

describe('Ut5106Service', () => {
  let service: Ut5106Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut5106Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
