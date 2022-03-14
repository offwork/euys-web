import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1261Component } from './kt-1261.component';

describe('Kt1261Component', () => {
  let component: Kt1261Component;
  let fixture: ComponentFixture<Kt1261Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1261Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
