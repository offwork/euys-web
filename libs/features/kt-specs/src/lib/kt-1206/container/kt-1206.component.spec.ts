import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1206Component } from './kt-1206.component';

describe('Kt1206Component', () => {
  let component: Kt1206Component;
  let fixture: ComponentFixture<Kt1206Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1206Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
