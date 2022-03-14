import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColumnExpanderComponent } from './table-column-expander.component';

describe('TableColumnExpanderComponent', () => {
  let component: TableColumnExpanderComponent;
  let fixture: ComponentFixture<TableColumnExpanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableColumnExpanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColumnExpanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
