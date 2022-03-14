import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ut5106Component } from './ut-5106.component';

describe('Ut5106Component', () => {
  let component: Ut5106Component;
  let fixture: ComponentFixture<Ut5106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ut5106Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ut5106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
