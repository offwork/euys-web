import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3002Component } from './up-3002.component';

describe('Up3002Component', () => {
  let component: Up3002Component;
  let fixture: ComponentFixture<Up3002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
