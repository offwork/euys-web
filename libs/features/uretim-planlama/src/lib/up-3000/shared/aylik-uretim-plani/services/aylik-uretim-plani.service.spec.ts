import { TestBed } from '@angular/core/testing';

import { AylikUretimPlaniService } from './aylik-uretim-plani.service';

describe('AylikUretimPlaniService', () => {
  let service: AylikUretimPlaniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AylikUretimPlaniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
