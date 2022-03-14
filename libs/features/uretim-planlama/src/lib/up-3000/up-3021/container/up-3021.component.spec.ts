import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3021Component } from './up-3021.component';

describe('Up3021Component', () => {
  let component: Up3021Component;
  let fixture: ComponentFixture<Up3021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
