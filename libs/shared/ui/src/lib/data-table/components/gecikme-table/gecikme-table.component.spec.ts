import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GecikmeTableComponent } from './gecikme-table.component';

describe('GecikmeTableComponent', () => {
  let component: GecikmeTableComponent;
  let fixture: ComponentFixture<GecikmeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GecikmeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GecikmeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
