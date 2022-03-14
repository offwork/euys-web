import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kk8141Component } from './kk-8141.component';

describe('Kk8141Component', () => {
  let component: Kk8141Component;
  let fixture: ComponentFixture<Kk8141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kk8141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kk8141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
