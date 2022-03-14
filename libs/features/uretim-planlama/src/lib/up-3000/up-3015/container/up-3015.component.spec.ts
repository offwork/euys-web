import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3015Component } from './up-3015.component';

describe('Up3015Component', () => {
  let component: Up3015Component;
  let fixture: ComponentFixture<Up3015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3015Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
