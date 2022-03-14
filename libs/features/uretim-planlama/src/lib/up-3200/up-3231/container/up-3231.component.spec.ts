import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3231Component } from './up-3231.component';

describe('Up3231Component', () => {
  let component: Up3231Component;
  let fixture: ComponentFixture<Up3231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3231Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
