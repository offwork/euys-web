import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1258Component } from './kt-1258.component';

describe('Kt1258Component', () => {
  let component: Kt1258Component;
  let fixture: ComponentFixture<Kt1258Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1258Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
