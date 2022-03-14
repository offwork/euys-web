import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pfdm3104Component } from './pfdm-3104.component';

describe('Pfdm3104Component', () => {
  let component: Pfdm3104Component;
  let fixture: ComponentFixture<Pfdm3104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pfdm3104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pfdm3104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
