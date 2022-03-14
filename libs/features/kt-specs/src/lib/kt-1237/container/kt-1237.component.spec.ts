import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1237Component } from './kt-1237.component';

describe('Kt1237Component', () => {
  let component: Kt1237Component;
  let fixture: ComponentFixture<Kt1237Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1237Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
