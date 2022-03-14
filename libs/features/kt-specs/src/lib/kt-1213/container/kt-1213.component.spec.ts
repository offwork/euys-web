import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1213Component } from './kt-1213.component';

describe('Kt1213Component', () => {
  let component: Kt1213Component;
  let fixture: ComponentFixture<Kt1213Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1213Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
