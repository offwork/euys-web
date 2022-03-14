import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kk8104Component } from './kk-8104.component';

describe('Kk8104Component', () => {
  let component: Kk8104Component;
  let fixture: ComponentFixture<Kk8104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kk8104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kk8104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
