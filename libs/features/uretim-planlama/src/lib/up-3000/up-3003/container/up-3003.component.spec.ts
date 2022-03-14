import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3003Component } from './up-3003.component';

describe('Up3003Component', () => {
  let component: Up3003Component;
  let fixture: ComponentFixture<Up3003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
