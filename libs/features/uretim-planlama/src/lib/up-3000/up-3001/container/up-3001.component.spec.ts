import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3001Component } from './up-3001.component';

describe('Up3001Component', () => {
  let component: Up3001Component;
  let fixture: ComponentFixture<Up3001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
