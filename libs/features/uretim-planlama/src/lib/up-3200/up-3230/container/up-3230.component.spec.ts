import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3230Component } from './up-3230.component';

describe('Up3230Component', () => {
  let component: Up3230Component;
  let fixture: ComponentFixture<Up3230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3230Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
