import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1260Component } from './kt-1260.component';

describe('Kt1260Component', () => {
  let component: Kt1260Component;
  let fixture: ComponentFixture<Kt1260Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1260Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
