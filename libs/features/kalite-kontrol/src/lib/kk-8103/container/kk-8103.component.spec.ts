import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kk8103Component } from './kk-8103.component';

describe('Kk8103Component', () => {
  let component: Kk8103Component;
  let fixture: ComponentFixture<Kk8103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kk8103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kk8103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
