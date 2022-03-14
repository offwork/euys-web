import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kk8140Component } from './kk-8140.component';

describe('Kk8140Component', () => {
  let component: Kk8140Component;
  let fixture: ComponentFixture<Kk8140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kk8140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kk8140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
