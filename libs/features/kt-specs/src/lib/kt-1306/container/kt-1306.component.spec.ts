import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1306Component } from './kt-1306.component';

describe('Kt1306Component', () => {
  let component: Kt1306Component;
  let fixture: ComponentFixture<Kt1306Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1306Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
