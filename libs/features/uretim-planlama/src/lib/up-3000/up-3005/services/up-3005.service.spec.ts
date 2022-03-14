import { TestBed } from '@angular/core/testing';

import { Up3005Service } from './up-3005.service';

describe('Up3005Service', () => {
  let service: Up3005Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3005Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
