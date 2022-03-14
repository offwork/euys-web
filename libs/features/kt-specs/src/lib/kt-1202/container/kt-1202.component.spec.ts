import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1202Component } from './kt-1202.component';

describe('Kt1202Component', () => {
  let component: Kt1202Component;
  let fixture: ComponentFixture<Kt1202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1202Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
