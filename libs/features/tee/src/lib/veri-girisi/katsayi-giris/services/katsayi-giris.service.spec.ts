import { TestBed } from '@angular/core/testing';

import { KatsayiGirisService } from './katsayi-giris.service';

describe('KatsayiGirisService', () => {
  let service: KatsayiGirisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KatsayiGirisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
