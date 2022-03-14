import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuTarihGecikmeAnaliziComponent } from './cu-tarih-gecikme-analizi.component';

describe('CuTarihGecikmeAnaliziComponent', () => {
  let component: CuTarihGecikmeAnaliziComponent;
  let fixture: ComponentFixture<CuTarihGecikmeAnaliziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuTarihGecikmeAnaliziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuTarihGecikmeAnaliziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
