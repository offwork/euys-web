import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1362Component } from './kt-1362.component';

describe('Kt1362Component', () => {
  let component: Kt1362Component;
  let fixture: ComponentFixture<Kt1362Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1362Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
