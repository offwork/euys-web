import { TestBed } from '@angular/core/testing';

import { Up3021Service } from './up-3021.service';

describe('Up3021Service', () => {
  let service: Up3021Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3021Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
