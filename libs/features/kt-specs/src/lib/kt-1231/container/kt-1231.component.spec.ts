import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1231Component } from './kt-1231.component';

describe('Kt1231Component', () => {
  let component: Kt1231Component;
  let fixture: ComponentFixture<Kt1231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1231Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
