import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1256Component } from './kt-1256.component';

describe('Kt1256Component', () => {
  let component: Kt1256Component;
  let fixture: ComponentFixture<Kt1256Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1256Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
