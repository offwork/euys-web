import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1332Component } from './kt-1332.component';

describe('Kt1332Component', () => {
  let component: Kt1332Component;
  let fixture: ComponentFixture<Kt1332Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1332Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
