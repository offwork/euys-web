import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1224Component } from './kt-1224.component';

describe('Kt1224Component', () => {
  let component: Kt1224Component;
  let fixture: ComponentFixture<Kt1224Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1224Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
