import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatDuruslarHedeflerComponent } from './hat-duruslar-hedefler.component';

describe('HatDuruslarHedeflerComponent', () => {
  let component: HatDuruslarHedeflerComponent;
  let fixture: ComponentFixture<HatDuruslarHedeflerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HatDuruslarHedeflerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HatDuruslarHedeflerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
