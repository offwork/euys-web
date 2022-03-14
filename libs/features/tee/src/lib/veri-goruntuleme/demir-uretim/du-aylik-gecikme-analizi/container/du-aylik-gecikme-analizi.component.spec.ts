import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuAylikGecikmeAnaliziComponent } from './du-aylik-gecikme-analizi.component';

describe('DuAylikGecikmeAnaliziComponent', () => {
  let component: DuAylikGecikmeAnaliziComponent;
  let fixture: ComponentFixture<DuAylikGecikmeAnaliziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuAylikGecikmeAnaliziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuAylikGecikmeAnaliziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
