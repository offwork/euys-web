import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kk8116Component } from './kk-8116.component';

describe('Kk8116Component', () => {
  let component: Kk8116Component;
  let fixture: ComponentFixture<Kk8116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kk8116Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kk8116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
