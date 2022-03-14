import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ut5107Component } from './ut-5107.component';

describe('Ut5107Component', () => {
  let component: Ut5107Component;
  let fixture: ComponentFixture<Ut5107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ut5107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ut5107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
