import { TestBed } from '@angular/core/testing';

import { Ut6113Service } from './ut-6113.service';

describe('Ut6113Service', () => {
  let service: Ut6113Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut6113Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
