import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorBilgilendirmeKayitComponent } from './operator-bilgilendirme-kayit.component';

describe('OperatorBilgilendirmeKayitComponent', () => {
  let component: OperatorBilgilendirmeKayitComponent;
  let fixture: ComponentFixture<OperatorBilgilendirmeKayitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorBilgilendirmeKayitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorBilgilendirmeKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
