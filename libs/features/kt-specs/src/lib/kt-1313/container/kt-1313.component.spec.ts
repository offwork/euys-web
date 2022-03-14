import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1313Component } from './kt-1313.component';

describe('Kt1313Component', () => {
  let component: Kt1313Component;
  let fixture: ComponentFixture<Kt1313Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1313Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
