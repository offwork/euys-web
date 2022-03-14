import { TestBed } from '@angular/core/testing';

import { Up3017Service } from './up-3017.service';

describe('Up3017Service', () => {
  let service: Up3017Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3017Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
