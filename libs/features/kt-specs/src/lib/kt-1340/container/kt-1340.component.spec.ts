import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1340Component } from './kt-1340.component';

describe('Kt1340Component', () => {
  let component: Kt1340Component;
  let fixture: ComponentFixture<Kt1340Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1340Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
