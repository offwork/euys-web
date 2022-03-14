import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedeflerComponent } from './hedefler.component';

describe('HedeflerComponent', () => {
  let component: HedeflerComponent;
  let fixture: ComponentFixture<HedeflerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HedeflerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HedeflerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
