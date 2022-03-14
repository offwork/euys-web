import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1235Component } from './kt-1235.component';

describe('Kt1235Component', () => {
  let component: Kt1235Component;
  let fixture: ComponentFixture<Kt1235Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1235Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
