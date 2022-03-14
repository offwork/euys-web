import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1330Component } from './kt-1330.component';

describe('Kt1330Component', () => {
  let component: Kt1330Component;
  let fixture: ComponentFixture<Kt1330Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1330Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
