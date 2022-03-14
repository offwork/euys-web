import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1230Component } from './kt-1230.component';

describe('Kt1230Component', () => {
  let component: Kt1230Component;
  let fixture: ComponentFixture<Kt1230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1230Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
