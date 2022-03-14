import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1249Component } from './kt-1249.component';

describe('Kt1249Component', () => {
  let component: Kt1249Component;
  let fixture: ComponentFixture<Kt1249Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1249Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
