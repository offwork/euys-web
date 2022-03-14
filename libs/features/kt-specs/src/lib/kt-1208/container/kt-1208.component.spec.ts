import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1208Component } from './kt-1208.component';

describe('Kt1208Component', () => {
  let component: Kt1208Component;
  let fixture: ComponentFixture<Kt1208Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1208Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
