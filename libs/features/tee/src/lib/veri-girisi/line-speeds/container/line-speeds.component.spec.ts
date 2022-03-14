import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSpeedsComponent } from './line-speeds.component';

describe('LineSpeedsComponent', () => {
  let component: LineSpeedsComponent;
  let fixture: ComponentFixture<LineSpeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineSpeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSpeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
