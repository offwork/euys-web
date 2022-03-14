import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1341Component } from './kt-1341.component';

describe('Kt1341Component', () => {
  let component: Kt1341Component;
  let fixture: ComponentFixture<Kt1341Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1341Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
