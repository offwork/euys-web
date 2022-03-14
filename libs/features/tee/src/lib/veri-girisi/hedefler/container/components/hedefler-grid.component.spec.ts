import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedeflerGridComponent } from './hedefler-grid.component';

describe('HedeflerGridComponent', () => {
  let component: HedeflerGridComponent;
  let fixture: ComponentFixture<HedeflerGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HedeflerGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HedeflerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
