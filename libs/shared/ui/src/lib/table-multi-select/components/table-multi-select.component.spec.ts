import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMultiSelectComponent } from './table-multi-select.component';

describe('TableMultiSelectComponent', () => {
  let component: TableMultiSelectComponent;
  let fixture: ComponentFixture<TableMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMultiSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
