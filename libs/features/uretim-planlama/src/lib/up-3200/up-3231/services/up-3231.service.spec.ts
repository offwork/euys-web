import { TestBed } from '@angular/core/testing';

import { Up3231Service } from './up-3231.service';

describe('Up3231Service', () => {
  let service: Up3231Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3231Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
