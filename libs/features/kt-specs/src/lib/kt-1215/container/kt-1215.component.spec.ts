import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1215Component } from './kt-1215.component';

describe('Kt1215Component', () => {
  let component: Kt1215Component;
  let fixture: ComponentFixture<Kt1215Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1215Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
