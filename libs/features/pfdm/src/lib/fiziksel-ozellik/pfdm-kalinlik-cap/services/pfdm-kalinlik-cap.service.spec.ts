import { TestBed } from '@angular/core/testing';

import { PfdmKalinlikCapService } from './pfdm-kalinlik-cap.service';

describe('PfdmKalinlikCapService', () => {
  let service: PfdmKalinlikCapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PfdmKalinlikCapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
