import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1319Component } from './kt-1319.component';

describe('Kt1319Component', () => {
  let component: Kt1319Component;
  let fixture: ComponentFixture<Kt1319Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1319Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
