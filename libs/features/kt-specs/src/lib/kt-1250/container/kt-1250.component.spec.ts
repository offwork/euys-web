import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1250Component } from './kt-1250.component';

describe('Kt1250Component', () => {
  let component: Kt1250Component;
  let fixture: ComponentFixture<Kt1250Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1250Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
