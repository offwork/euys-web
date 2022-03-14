import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1233Component } from './kt-1233.component';

describe('Kt1233Component', () => {
  let component: Kt1233Component;
  let fixture: ComponentFixture<Kt1233Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1233Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
