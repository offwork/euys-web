import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1312Component } from './kt-1312.component';

describe('Kt1312Component', () => {
  let component: Kt1312Component;
  let fixture: ComponentFixture<Kt1312Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1312Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
