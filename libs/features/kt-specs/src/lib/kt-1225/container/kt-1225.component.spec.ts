import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1225Component } from './kt-1225.component';

describe('Kt1225Component', () => {
  let component: Kt1225Component;
  let fixture: ComponentFixture<Kt1225Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1225Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
