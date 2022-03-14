import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunFotograflariSayfasinaGitButtonComponent } from './urun-fotograflari-sayfasina-git-button.component';

describe('UrunFotograflariSayfasinaGitButtonComponent', () => {
  let component: UrunFotograflariSayfasinaGitButtonComponent;
  let fixture: ComponentFixture<UrunFotograflariSayfasinaGitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunFotograflariSayfasinaGitButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunFotograflariSayfasinaGitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
