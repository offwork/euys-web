import { TestBed } from '@angular/core/testing';

import { Up3030Service } from './up-3030.service';

describe('Up3030Service', () => {
  let service: Up3030Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3030Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
