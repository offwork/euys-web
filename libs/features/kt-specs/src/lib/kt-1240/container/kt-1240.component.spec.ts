import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1240Component } from './kt-1240.component';

describe('Kt1240Component', () => {
  let component: Kt1240Component;
  let fixture: ComponentFixture<Kt1240Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1240Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
