import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1219Component } from './kt-1219.component';

describe('Kt1219Component', () => {
  let component: Kt1219Component;
  let fixture: ComponentFixture<Kt1219Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1219Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
