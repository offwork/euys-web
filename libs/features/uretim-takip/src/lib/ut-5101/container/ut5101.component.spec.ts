import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ut5101Component } from './ut5101.component';

describe('Ut5101Component', () => {
  let component: Ut5101Component;
  let fixture: ComponentFixture<Ut5101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ut5101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ut5101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
