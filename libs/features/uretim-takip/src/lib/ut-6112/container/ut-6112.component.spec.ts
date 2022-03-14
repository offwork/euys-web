import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ut6112Component } from './ut-6112.component';

describe('Ut6112Component', () => {
  let component: Ut6112Component;
  let fixture: ComponentFixture<Ut6112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ut6112Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ut6112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
