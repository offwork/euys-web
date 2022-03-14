import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicColsComponent } from './dynamic-cols.component';

describe('DynamicColsComponent', () => {
  let component: DynamicColsComponent;
  let fixture: ComponentFixture<DynamicColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicColsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
