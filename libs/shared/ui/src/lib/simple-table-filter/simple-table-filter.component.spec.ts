import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTableFilterComponent } from './simple-table-filter.component';

describe('SimpleTableFilterComponent', () => {
  let component: SimpleTableFilterComponent;
  let fixture: ComponentFixture<SimpleTableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTableFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
