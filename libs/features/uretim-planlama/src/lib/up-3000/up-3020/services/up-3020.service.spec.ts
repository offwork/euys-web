import { TestBed } from '@angular/core/testing';

import { Up3020Service } from './up-3020.service';

describe('Up3020Service', () => {
  let service: Up3020Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3020Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
