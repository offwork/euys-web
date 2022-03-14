import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnActionButtonComponent } from './column-action-button.component';

describe('ColumnActionButtonComponent', () => {
  let component: ColumnActionButtonComponent;
  let fixture: ComponentFixture<ColumnActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
