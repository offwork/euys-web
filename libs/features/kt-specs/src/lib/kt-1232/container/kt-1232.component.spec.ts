import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1232Component } from './kt-1232.component';

describe('Kt1232Component', () => {
  let component: Kt1232Component;
  let fixture: ComponentFixture<Kt1232Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1232Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
