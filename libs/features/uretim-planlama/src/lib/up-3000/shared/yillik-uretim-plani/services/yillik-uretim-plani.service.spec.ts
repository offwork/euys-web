import { TestBed } from '@angular/core/testing';

import { YillikUretimPlaniService } from './yillik-uretim-plani.service';

describe('YillikUretimPlaniService', () => {
  let service: YillikUretimPlaniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YillikUretimPlaniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
