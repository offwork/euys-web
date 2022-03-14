import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1315Component } from './kt-1315.component';

describe('Kt1315Component', () => {
  let component: Kt1315Component;
  let fixture: ComponentFixture<Kt1315Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1315Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
