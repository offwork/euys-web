import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kk8115Component } from './kk-8115.component';

describe('Kk8115Component', () => {
  let component: Kk8115Component;
  let fixture: ComponentFixture<Kk8115Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kk8115Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kk8115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
