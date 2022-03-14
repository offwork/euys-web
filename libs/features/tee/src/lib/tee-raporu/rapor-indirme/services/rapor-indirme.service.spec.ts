import { TestBed } from '@angular/core/testing';

import { RaporIndirmeService } from './rapor-indirme.service';

describe('RaporIndirmeService', () => {
  let service: RaporIndirmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaporIndirmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
