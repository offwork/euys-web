import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1320Component } from './kt-1320.component';

describe('Kt1320Component', () => {
  let component: Kt1320Component;
  let fixture: ComponentFixture<Kt1320Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1320Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
