import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SicakAylikGecikmeAnaliziComponent } from './sicak-aylik-gecikme-analizi.component';

describe('SicakAylikGecikmeAnaliziComponent', () => {
  let component: SicakAylikGecikmeAnaliziComponent;
  let fixture: ComponentFixture<SicakAylikGecikmeAnaliziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SicakAylikGecikmeAnaliziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SicakAylikGecikmeAnaliziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
