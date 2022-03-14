import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1223Component } from './kt-1223.component';

describe('Kt1223Component', () => {
  let component: Kt1223Component;
  let fixture: ComponentFixture<Kt1223Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1223Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
