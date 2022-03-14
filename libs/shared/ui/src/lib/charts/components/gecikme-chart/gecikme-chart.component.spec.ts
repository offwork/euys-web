import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GecikmeChartComponent } from './gecikme-chart.component';

describe('GecikmeChartComponent', () => {
  let component: GecikmeChartComponent;
  let fixture: ComponentFixture<GecikmeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GecikmeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GecikmeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
