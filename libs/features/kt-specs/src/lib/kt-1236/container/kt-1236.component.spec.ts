import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1236Component } from './kt-1236.component';

describe('Kt1236Component', () => {
  let component: Kt1236Component;
  let fixture: ComponentFixture<Kt1236Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1236Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
