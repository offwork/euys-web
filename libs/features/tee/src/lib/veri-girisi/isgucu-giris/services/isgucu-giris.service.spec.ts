import { TestBed } from '@angular/core/testing';

import { IsgucuGirisService } from './isgucu-giris.service';

describe('IsgucuGirisService', () => {
  let service: IsgucuGirisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsgucuGirisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
