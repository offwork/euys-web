import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ut6113Component } from './ut-6113.component';

describe('Ut6113Component', () => {
  let component: Ut6113Component;
  let fixture: ComponentFixture<Ut6113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ut6113Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ut6113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
