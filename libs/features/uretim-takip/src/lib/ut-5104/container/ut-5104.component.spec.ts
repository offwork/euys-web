import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ut5104Component } from './ut-5104.component';

describe('Ut5104Component', () => {
  let component: Ut5104Component;
  let fixture: ComponentFixture<Ut5104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ut5104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ut5104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
