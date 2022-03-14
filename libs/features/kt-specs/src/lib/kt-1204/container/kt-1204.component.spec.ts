import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1204Component } from './kt-1204.component';

describe('Kt1204Component', () => {
  let component: Kt1204Component;
  let fixture: ComponentFixture<Kt1204Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1204Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
