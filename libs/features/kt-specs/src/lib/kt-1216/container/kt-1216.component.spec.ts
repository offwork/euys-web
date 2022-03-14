import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1216Component } from './kt-1216.component';

describe('Kt1216Component', () => {
  let component: Kt1216Component;
  let fixture: ComponentFixture<Kt1216Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1216Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
