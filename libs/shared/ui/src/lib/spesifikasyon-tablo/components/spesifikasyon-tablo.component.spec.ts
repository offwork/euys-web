import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KtAt1SckHadIkmalSicakl } from '@euys/api-interfaces';

import { SpesifikasyonTabloComponent } from './spesifikasyon-tablo.component';

describe('SpesifikasyonTabloComponent', () => {
  let component: SpesifikasyonTabloComponent<KtAt1SckHadIkmalSicakl>;
  let fixture: ComponentFixture<SpesifikasyonTabloComponent<KtAt1SckHadIkmalSicakl>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpesifikasyonTabloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent<SpesifikasyonTabloComponent<KtAt1SckHadIkmalSicakl>>(SpesifikasyonTabloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
