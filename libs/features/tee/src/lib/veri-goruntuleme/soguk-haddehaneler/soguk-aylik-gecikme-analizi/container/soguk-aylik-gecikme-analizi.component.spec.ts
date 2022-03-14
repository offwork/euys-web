import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SogukAylikGecikmeAnaliziComponent } from './soguk-aylik-gecikme-analizi.component';

describe('SogukAylikGecikmeAnaliziComponent', () => {
  let component: SogukAylikGecikmeAnaliziComponent;
  let fixture: ComponentFixture<SogukAylikGecikmeAnaliziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SogukAylikGecikmeAnaliziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SogukAylikGecikmeAnaliziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
