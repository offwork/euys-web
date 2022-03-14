import { TestBed } from '@angular/core/testing';

import { Up3004Service } from './up-3004.service';

describe('Up3004Service', () => {
  let service: Up3004Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3004Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
