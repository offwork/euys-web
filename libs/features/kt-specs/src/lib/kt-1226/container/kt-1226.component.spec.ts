import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1226Component } from './kt-1226.component';

describe('Kt1226Component', () => {
  let component: Kt1226Component;
  let fixture: ComponentFixture<Kt1226Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1226Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
