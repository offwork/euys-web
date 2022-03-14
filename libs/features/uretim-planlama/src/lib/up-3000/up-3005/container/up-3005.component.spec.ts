import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3005Component } from './up-3005.component';

describe('Up3005Component', () => {
  let component: Up3005Component;
  let fixture: ComponentFixture<Up3005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3005Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
