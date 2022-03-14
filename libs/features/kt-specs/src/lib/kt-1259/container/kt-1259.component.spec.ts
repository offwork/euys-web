import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1259Component } from './kt-1259.component';

describe('Kt1259Component', () => {
  let component: Kt1259Component;
  let fixture: ComponentFixture<Kt1259Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1259Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
