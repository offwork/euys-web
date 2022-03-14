import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1302Component } from './kt-1302.component';

describe('Kt1302Component', () => {
  let component: Kt1302Component;
  let fixture: ComponentFixture<Kt1302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1302Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
