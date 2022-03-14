import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kk8102Component } from './kk-8102.component';

describe('Kk8102Component', () => {
  let component: Kk8102Component;
  let fixture: ComponentFixture<Kk8102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kk8102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kk8102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
