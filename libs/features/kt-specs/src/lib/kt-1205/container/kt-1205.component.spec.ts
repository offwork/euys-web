import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1205Component } from './kt-1205.component';

describe('Kt1205Component', () => {
  let component: Kt1205Component;
  let fixture: ComponentFixture<Kt1205Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1205Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
