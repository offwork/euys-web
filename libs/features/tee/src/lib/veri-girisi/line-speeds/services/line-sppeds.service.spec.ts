import { TestBed } from '@angular/core/testing';

import { LineSppedsService } from './line-sppeds.service';

describe('LineSppedsService', () => {
  let service: LineSppedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineSppedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
