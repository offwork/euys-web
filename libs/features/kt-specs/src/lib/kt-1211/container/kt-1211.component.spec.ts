import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1211Component } from './kt-1211.component';

describe('Kt1211Component', () => {
  let component: Kt1211Component;
  let fixture: ComponentFixture<Kt1211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1211Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
