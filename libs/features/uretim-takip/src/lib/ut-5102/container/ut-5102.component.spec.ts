import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ut5102Component } from './ut-5102.component';

describe('Ut5102Component', () => {
  let component: Ut5102Component;
  let fixture: ComponentFixture<Ut5102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ut5102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ut5102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
