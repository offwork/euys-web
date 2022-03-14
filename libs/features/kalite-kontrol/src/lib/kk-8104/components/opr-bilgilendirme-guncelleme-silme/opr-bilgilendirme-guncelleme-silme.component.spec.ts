import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OprBilgilendirmeGuncellemeSilmeComponent } from './opr-bilgilendirme-guncelleme-silme.component';

describe('OprBilgilendirmeGuncellemeSilmeComponent', () => {
  let component: OprBilgilendirmeGuncellemeSilmeComponent;
  let fixture: ComponentFixture<OprBilgilendirmeGuncellemeSilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OprBilgilendirmeGuncellemeSilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OprBilgilendirmeGuncellemeSilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
