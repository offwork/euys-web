import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SogukTarihGecikmeAnaliziComponent } from './soguk-tarih-gecikme-analizi.component';

describe('SogukTarihGecikmeAnaliziComponent', () => {
  let component: SogukTarihGecikmeAnaliziComponent;
  let fixture: ComponentFixture<SogukTarihGecikmeAnaliziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SogukTarihGecikmeAnaliziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SogukTarihGecikmeAnaliziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
