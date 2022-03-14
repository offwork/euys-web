import { TestBed } from '@angular/core/testing';

import { Up3244Service } from './up-3244.service';

describe('Up3244Service', () => {
  let service: Up3244Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Up3244Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
