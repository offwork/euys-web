import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3016Component } from './up-3016.component';

describe('Up3016Component', () => {
  let component: Up3016Component;
  let fixture: ComponentFixture<Up3016Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3016Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
