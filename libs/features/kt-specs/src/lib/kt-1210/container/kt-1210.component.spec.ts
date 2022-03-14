import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1210Component } from './kt-1210.component';

describe('Kt1210Component', () => {
  let component: Kt1210Component;
  let fixture: ComponentFixture<Kt1210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1210Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
