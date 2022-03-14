import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1360Component } from './kt-1360.component';

describe('Kt1360Component', () => {
  let component: Kt1360Component;
  let fixture: ComponentFixture<Kt1360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1360Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
