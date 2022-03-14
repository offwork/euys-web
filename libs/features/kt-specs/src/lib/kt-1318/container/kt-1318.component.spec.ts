import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1318Component } from './kt-1318.component';

describe('Kt1318Component', () => {
  let component: Kt1318Component;
  let fixture: ComponentFixture<Kt1318Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1318Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
