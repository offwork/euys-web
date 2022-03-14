import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1201Component } from './kt-1201.component';

describe('Kt1201Component', () => {
  let component: Kt1201Component;
  let fixture: ComponentFixture<Kt1201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1201Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
