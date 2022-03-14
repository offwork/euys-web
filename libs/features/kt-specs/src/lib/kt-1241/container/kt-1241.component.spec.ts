import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1241Component } from './kt-1241.component';

describe('Kt1241Component', () => {
  let component: Kt1241Component;
  let fixture: ComponentFixture<Kt1241Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1241Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
