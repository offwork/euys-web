import { TestBed } from '@angular/core/testing';

import { Up3002Service } from './up-3002.service';

describe('Up3002Service', () => {
  let service: Up3002Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3002Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });  
});
