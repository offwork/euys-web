import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1207Component } from './kt-1207.component';

describe('Kt1207Component', () => {
  let component: Kt1207Component;
  let fixture: ComponentFixture<Kt1207Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1207Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
