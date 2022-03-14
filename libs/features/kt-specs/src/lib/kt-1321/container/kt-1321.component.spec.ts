import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1321Component } from './kt-1321.component';

describe('Kt1321Component', () => {
  let component: Kt1321Component;
  let fixture: ComponentFixture<Kt1321Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1321Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
