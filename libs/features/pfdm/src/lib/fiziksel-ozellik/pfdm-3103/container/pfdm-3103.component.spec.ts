import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pfdm3103Component } from './pfdm-3103.component';

describe('Pfdm3103Component', () => {
  let component: Pfdm3103Component;
  let fixture: ComponentFixture<Pfdm3103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pfdm3103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pfdm3103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
