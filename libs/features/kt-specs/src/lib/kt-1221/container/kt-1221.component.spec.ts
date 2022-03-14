import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1221Component } from './kt-1221.component';

describe('Kt1221Component', () => {
  let component: Kt1221Component;
  let fixture: ComponentFixture<Kt1221Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1221Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
