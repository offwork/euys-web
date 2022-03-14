import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1222Component } from './kt-1222.component';

describe('Kt1222Component', () => {
  let component: Kt1222Component;
  let fixture: ComponentFixture<Kt1222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1222Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
