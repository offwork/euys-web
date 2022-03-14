import { TestBed } from '@angular/core/testing';

import { Kt1215Service } from './kt-1215.service';

describe('Kt1215Service', () => {
  let service: Kt1215Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1215Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
