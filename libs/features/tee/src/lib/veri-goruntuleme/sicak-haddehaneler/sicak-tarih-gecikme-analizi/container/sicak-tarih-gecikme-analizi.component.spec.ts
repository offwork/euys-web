import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SicakTarihGecikmeAnaliziComponent } from './sicak-tarih-gecikme-analizi.component';

describe('SicakTarihGecikmeAnaliziComponent', () => {
  let component: SicakTarihGecikmeAnaliziComponent;
  let fixture: ComponentFixture<SicakTarihGecikmeAnaliziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SicakTarihGecikmeAnaliziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SicakTarihGecikmeAnaliziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
