import { TestBed } from '@angular/core/testing';

import { Up3010Service } from './up-3010.service';

describe('Up3010Service', () => {
  let service: Up3010Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3010Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
