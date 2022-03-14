import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ut5108Component } from './ut-5108.component';

describe('Ut5108Component', () => {
  let component: Ut5108Component;
  let fixture: ComponentFixture<Ut5108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ut5108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ut5108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
