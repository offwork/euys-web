import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1307Component } from './kt-1307.component';

describe('Kt1307Component', () => {
  let component: Kt1307Component;
  let fixture: ComponentFixture<Kt1307Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1307Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
