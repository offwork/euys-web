import { TestBed } from '@angular/core/testing';

import { DirtyClickService } from './dirty-click.service';

describe('DirtyClickService', () => {
  let service: DirtyClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirtyClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
