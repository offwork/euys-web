import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ut5105Component } from './ut-5105.component';

describe('Ut5105Component', () => {
  let component: Ut5105Component;
  let fixture: ComponentFixture<Ut5105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ut5105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ut5105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
