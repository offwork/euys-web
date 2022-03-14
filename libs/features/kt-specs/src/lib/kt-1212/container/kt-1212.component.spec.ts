import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1212Component } from './kt-1212.component';

describe('Kt1212Component', () => {
  let component: Kt1212Component;
  let fixture: ComponentFixture<Kt1212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1212Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
