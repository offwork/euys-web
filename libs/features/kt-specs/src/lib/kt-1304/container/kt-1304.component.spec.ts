import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1304Component } from './kt-1304.component';

describe('Kt1304Component', () => {
  let component: Kt1304Component;
  let fixture: ComponentFixture<Kt1304Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1304Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
