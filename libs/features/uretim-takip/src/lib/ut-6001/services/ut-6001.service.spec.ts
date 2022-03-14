import { TestBed } from '@angular/core/testing';

import { Ut6001Service } from './ut-6001.service';

describe('Ut6001Service', () => {
  let service: Ut6001Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut6001Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
