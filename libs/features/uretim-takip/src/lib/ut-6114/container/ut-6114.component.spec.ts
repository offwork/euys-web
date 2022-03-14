import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ut6114Component } from './ut-6114.component';

describe('Ut6114Component', () => {
  let component: Ut6114Component;
  let fixture: ComponentFixture<Ut6114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ut6114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ut6114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
