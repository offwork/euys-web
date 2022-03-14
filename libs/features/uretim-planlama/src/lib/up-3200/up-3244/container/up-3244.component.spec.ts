import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3244Component } from './up-3244.component';

describe('Up3244Component', () => {
  let component: Up3244Component;
  let fixture: ComponentFixture<Up3244Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3244Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
