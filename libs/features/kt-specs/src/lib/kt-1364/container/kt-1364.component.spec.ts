import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1364Component } from './kt-1364.component';

describe('Kt1364Component', () => {
  let component: Kt1364Component;
  let fixture: ComponentFixture<Kt1364Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1364Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
