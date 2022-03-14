import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuAylikGecikmeAnaliziComponent } from './cu-aylik-gecikme-analizi.component';

describe('CuAylikGecikmeAnaliziComponent', () => {
  let component: CuAylikGecikmeAnaliziComponent;
  let fixture: ComponentFixture<CuAylikGecikmeAnaliziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuAylikGecikmeAnaliziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuAylikGecikmeAnaliziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
