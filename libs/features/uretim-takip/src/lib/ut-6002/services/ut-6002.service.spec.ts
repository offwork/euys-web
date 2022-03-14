import { TestBed } from '@angular/core/testing';

import { Ut6002Service } from './ut-6002.service';

describe('Ut6002Service', () => {
  let service: Ut6002Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut6002Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
