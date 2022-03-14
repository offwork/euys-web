import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Up3030Component } from './up-3030.component';

describe('Up3030Component', () => {
  let component: Up3030Component;
  let fixture: ComponentFixture<Up3030Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Up3030Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Up3030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
