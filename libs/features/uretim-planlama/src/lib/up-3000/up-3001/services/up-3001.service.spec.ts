import { TestBed } from '@angular/core/testing';

import { Up3001Service } from './up-3001.service';

describe('Up3001Service', () => {
  let service: Up3001Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3001Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
