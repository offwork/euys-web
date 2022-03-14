import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1245Component } from './kt-1245.component';

describe('Kt1245Component', () => {
  let component: Kt1245Component;
  let fixture: ComponentFixture<Kt1245Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1245Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
