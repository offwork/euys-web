import { TestBed } from '@angular/core/testing';

import { KsyfStandartHizService } from './ksyf-standart-hiz.service';

describe('KsyfStandartHizService', () => {
  let service: KsyfStandartHizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KsyfStandartHizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
