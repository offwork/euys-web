import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pfdm3102Component } from './pfdm-3102.component';

describe('Pfdm3102Component', () => {
  let component: Pfdm3102Component;
  let fixture: ComponentFixture<Pfdm3102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pfdm3102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pfdm3102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
