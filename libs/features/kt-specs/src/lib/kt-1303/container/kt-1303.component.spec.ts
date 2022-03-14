import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1303Component } from './kt-1303.component';

describe('Kt1303Component', () => {
  let component: Kt1303Component;
  let fixture: ComponentFixture<Kt1303Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1303Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
