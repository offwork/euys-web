import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1257Component } from './kt-1257.component';

describe('Kt1257Component', () => {
  let component: Kt1257Component;
  let fixture: ComponentFixture<Kt1257Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1257Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
