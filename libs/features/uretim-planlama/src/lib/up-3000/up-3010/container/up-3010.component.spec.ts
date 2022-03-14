import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3010Component } from './up-3010.component';

describe('Up3010Component', () => {
  let component: Up3010Component;
  let fixture: ComponentFixture<Up3010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3010Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
