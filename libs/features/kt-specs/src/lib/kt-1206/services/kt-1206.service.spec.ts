import { TestBed } from '@angular/core/testing';

import { Kt1206Service } from './kt-1206.service';

describe('Kt1206Service', () => {
  let service: Kt1206Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1206Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
