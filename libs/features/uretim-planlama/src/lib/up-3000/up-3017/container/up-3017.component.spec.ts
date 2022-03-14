import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3017Component } from './up-3017.component';

describe('Up3017Component', () => {
  let component: Up3017Component;
  let fixture: ComponentFixture<Up3017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
