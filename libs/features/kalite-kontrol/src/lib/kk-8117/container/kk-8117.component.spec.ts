import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kk8117Component } from './kk-8117.component';

describe('Kk8117Component', () => {
  let component: Kk8117Component;
  let fixture: ComponentFixture<Kk8117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kk8117Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kk8117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
