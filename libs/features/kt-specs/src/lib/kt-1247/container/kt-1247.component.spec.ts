import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1247Component } from './kt-1247.component';

describe('Kt1247Component', () => {
  let component: Kt1247Component;
  let fixture: ComponentFixture<Kt1247Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1247Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
