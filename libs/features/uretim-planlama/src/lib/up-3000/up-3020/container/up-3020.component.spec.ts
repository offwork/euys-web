import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3020Component } from './up-3020.component';

describe('Up3020Component', () => {
  let component: Up3020Component;
  let fixture: ComponentFixture<Up3020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
