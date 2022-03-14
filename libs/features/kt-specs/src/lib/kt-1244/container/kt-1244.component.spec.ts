import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1244Component } from './kt-1244.component';

describe('Kt1244Component', () => {
  let component: Kt1244Component;
  let fixture: ComponentFixture<Kt1244Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1244Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
