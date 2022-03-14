import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3004Component } from './up-3004.component';

describe('Up3004Component', () => {
  let component: Up3004Component;
  let fixture: ComponentFixture<Up3004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
