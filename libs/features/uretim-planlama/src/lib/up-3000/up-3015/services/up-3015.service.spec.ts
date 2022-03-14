import { TestBed } from '@angular/core/testing';

import { Up3015Service } from './up-3015.service';

describe('Up3015Service', () => {
  let service: Up3015Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3015Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
