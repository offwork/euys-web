import { TestBed } from '@angular/core/testing';

import { ImalatLotService } from './imalat-lot.service';

describe('ImalatLotService', () => {
  let service: ImalatLotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImalatLotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
