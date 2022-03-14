import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1220Component } from './kt-1220.component';

describe('Kt1220Component', () => {
  let component: Kt1220Component;
  let fixture: ComponentFixture<Kt1220Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1220Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
