import { TestBed } from '@angular/core/testing';

import { Up3230Service } from './up-3230.service';

describe('Up3230Service', () => {
  let service: Up3230Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3230Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
