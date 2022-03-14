import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1243Component } from './kt-1243.component';

describe('Kt1243Component', () => {
  let component: Kt1243Component;
  let fixture: ComponentFixture<Kt1243Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1243Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
