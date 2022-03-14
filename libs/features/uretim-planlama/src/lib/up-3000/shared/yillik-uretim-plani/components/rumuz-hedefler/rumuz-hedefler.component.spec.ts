import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RumuzHedeflerComponent } from './rumuz-hedefler.component';

describe('RumuzHedeflerComponent', () => {
  let component: RumuzHedeflerComponent;
  let fixture: ComponentFixture<RumuzHedeflerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RumuzHedeflerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RumuzHedeflerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
