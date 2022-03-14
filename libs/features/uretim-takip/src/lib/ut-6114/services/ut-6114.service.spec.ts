import { TestBed } from '@angular/core/testing';

import { Ut6114Service } from './ut-6114.service';

describe('Ut6114Service', () => {
  let service: Ut6114Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ut6114Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
