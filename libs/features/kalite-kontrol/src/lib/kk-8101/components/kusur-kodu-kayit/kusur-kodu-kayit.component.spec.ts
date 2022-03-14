import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KusurKoduKayitComponent } from './kusur-kodu-kayit.component';

describe('KusurKoduKayitComponent', () => {
  let component: KusurKoduKayitComponent;
  let fixture: ComponentFixture<KusurKoduKayitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KusurKoduKayitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KusurKoduKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
