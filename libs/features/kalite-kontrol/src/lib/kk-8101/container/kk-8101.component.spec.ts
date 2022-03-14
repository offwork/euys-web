import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kk8101Component } from './kk-8101.component';

describe('Kk8101Component', () => {
  let component: Kk8101Component;
  let fixture: ComponentFixture<Kk8101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kk8101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kk8101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
