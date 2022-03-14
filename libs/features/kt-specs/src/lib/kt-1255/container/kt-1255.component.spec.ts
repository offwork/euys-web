import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1255Component } from './kt-1255.component';

describe('Kt1255Component', () => {
  let component: Kt1255Component;
  let fixture: ComponentFixture<Kt1255Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1255Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
