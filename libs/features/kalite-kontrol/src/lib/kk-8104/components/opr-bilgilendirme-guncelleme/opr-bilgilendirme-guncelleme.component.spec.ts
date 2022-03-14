import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OprBilgilendirmeGuncellemeComponent } from './opr-bilgilendirme-guncelleme.component';

describe('OprBilgilendirmeGuncellemeComponent', () => {
  let component: OprBilgilendirmeGuncellemeComponent;
  let fixture: ComponentFixture<OprBilgilendirmeGuncellemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OprBilgilendirmeGuncellemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OprBilgilendirmeGuncellemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
