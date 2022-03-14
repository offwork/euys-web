import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1209Component } from './kt-1209.component';

describe('Kt1209Component', () => {
  let component: Kt1209Component;
  let fixture: ComponentFixture<Kt1209Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1209Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
