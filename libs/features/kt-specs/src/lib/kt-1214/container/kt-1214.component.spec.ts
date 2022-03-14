import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1214Component } from './kt-1214.component';

describe('Kt1214Component', () => {
  let component: Kt1214Component;
  let fixture: ComponentFixture<Kt1214Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1214Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
