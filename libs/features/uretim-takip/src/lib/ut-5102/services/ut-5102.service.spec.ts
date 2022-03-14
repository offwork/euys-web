import { TestBed } from '@angular/core/testing';

import { Ut5102Service } from './ut-5102.service';

describe('Ut5102Service', () => {
  let service: Ut5102Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut5102Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
