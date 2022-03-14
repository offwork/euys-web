import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3011Component } from './up-3011.component';

describe('Up3011Component', () => {
  let component: Up3011Component;
  let fixture: ComponentFixture<Up3011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3011Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
