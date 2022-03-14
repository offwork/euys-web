import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pfdm3101Component } from './pfdm-3101.component';

describe('Pfdm3101Component', () => {
  let component: Pfdm3101Component;
  let fixture: ComponentFixture<Pfdm3101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pfdm3101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pfdm3101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
