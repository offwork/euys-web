import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuTarihGecikmeAnaliziComponent } from './du-tarih-gecikme-analizi.component';

describe('DuTarihGecikmeAnaliziComponent', () => {
  let component: DuTarihGecikmeAnaliziComponent;
  let fixture: ComponentFixture<DuTarihGecikmeAnaliziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuTarihGecikmeAnaliziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuTarihGecikmeAnaliziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
