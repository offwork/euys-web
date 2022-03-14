import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1252Component } from './kt-1252.component';

describe('Kt1252Component', () => {
  let component: Kt1252Component;
  let fixture: ComponentFixture<Kt1252Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1252Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
