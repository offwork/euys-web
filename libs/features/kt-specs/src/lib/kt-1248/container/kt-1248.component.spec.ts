import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1248Component } from './kt-1248.component';

describe('Kt1248Component', () => {
  let component: Kt1248Component;
  let fixture: ComponentFixture<Kt1248Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1248Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
