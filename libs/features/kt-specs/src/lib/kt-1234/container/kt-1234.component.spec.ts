import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1234Component } from './kt-1234.component';

describe('Kt1234Component', () => {
  let component: Kt1234Component;
  let fixture: ComponentFixture<Kt1234Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1234Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
