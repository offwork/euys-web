import { TestBed } from '@angular/core/testing';

import { Up3016Service } from './up-3016.service';

describe('Up3016Service', () => {
  let service: Up3016Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3016Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
