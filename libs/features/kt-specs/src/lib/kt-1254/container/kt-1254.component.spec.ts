import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1254Component } from './kt-1254.component';

describe('Kt1254Component', () => {
  let component: Kt1254Component;
  let fixture: ComponentFixture<Kt1254Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1254Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
