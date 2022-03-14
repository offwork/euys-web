import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kt1363Component } from './kt-1363.component';

describe('Kt1363Component', () => {
  let component: Kt1363Component;
  let fixture: ComponentFixture<Kt1363Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kt1363Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kt1363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
