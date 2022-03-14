import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ut5103Component } from './ut-5103.component';

describe('Ut5103Component', () => {
  let component: Ut5103Component;
  let fixture: ComponentFixture<Ut5103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ut5103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ut5103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
