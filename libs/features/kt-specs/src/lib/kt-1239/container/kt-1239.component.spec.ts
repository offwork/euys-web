import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1239Component } from './kt-1239.component';

describe('Kt1239Component', () => {
  let component: Kt1239Component;
  let fixture: ComponentFixture<Kt1239Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1239Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
