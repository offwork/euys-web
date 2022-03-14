import { TestBed } from '@angular/core/testing';

import { KaliteService } from './kalite.service';

describe('KaliteService', () => {
  let service: KaliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KaliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
