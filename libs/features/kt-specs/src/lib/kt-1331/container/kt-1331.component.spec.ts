import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1331Component } from './kt-1331.component';

describe('Kt1331Component', () => {
  let component: Kt1331Component;
  let fixture: ComponentFixture<Kt1331Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1331Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
