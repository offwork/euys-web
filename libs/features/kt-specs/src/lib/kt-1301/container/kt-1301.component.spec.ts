import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1301Component } from './kt-1301.component';

describe('Kt1301Component', () => {
  let component: Kt1301Component;
  let fixture: ComponentFixture<Kt1301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1301Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
