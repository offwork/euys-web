import { TestBed } from '@angular/core/testing';

import { BazAnaBilgilerService } from './baz-ana-bilgiler.service';

describe('BazAnaBilgilerService', () => {
  let service: BazAnaBilgilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BazAnaBilgilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
