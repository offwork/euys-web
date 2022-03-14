import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1253Component } from './kt-1253.component';

describe('Kt1253Component', () => {
  let component: Kt1253Component;
  let fixture: ComponentFixture<Kt1253Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1253Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
