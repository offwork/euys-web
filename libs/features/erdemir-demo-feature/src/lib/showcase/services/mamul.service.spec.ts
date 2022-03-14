import { TestBed } from '@angular/core/testing';

import { MamulService } from './mamul.service';

describe('MamulService', () => {
  let service: MamulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MamulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
