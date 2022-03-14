import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1314Component } from './kt-1314.component';

describe('Kt1314Component', () => {
  let component: Kt1314Component;
  let fixture: ComponentFixture<Kt1314Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1314Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
