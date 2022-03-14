import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1238Component } from './kt-1238.component';

describe('Kt1238Component', () => {
  let component: Kt1238Component;
  let fixture: ComponentFixture<Kt1238Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1238Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
