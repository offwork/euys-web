import { TestBed } from '@angular/core/testing';

import { Up3003Service } from './up-3003.service';

describe('Up3003Service', () => {
  let service: Up3003Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3003Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
