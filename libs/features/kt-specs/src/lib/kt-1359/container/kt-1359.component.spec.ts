import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1359Component } from './kt-1359.component';

describe('Kt1359Component', () => {
  let component: Kt1359Component;
  let fixture: ComponentFixture<Kt1359Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1359Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
