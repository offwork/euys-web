import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1344Component } from './kt-1344.component';

describe('Kt1344Component', () => {
  let component: Kt1344Component;
  let fixture: ComponentFixture<Kt1344Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1344Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
