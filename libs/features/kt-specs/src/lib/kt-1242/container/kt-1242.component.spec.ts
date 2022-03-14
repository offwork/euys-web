import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1242Component } from './kt-1242.component';

describe('Kt1242Component', () => {
  let component: Kt1242Component;
  let fixture: ComponentFixture<Kt1242Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1242Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
