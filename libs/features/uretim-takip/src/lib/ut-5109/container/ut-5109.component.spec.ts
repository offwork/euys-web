import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ut5109Component } from './ut-5109.component';

describe('Ut5109Component', () => {
  let component: Ut5109Component;
  let fixture: ComponentFixture<Ut5109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ut5109Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ut5109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
