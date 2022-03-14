import { TestBed } from '@angular/core/testing';

import { Kt1306Service } from './kt-1306.service';

describe('Kt1306Service', () => {
  let service: Kt1306Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kt1306Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
