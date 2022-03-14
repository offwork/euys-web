import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcKayitOnayFifthComponent } from './qc-kayit-onay-fifth.component';

describe('QcKayitOnayFifthComponent', () => {
  let component: QcKayitOnayFifthComponent;
  let fixture: ComponentFixture<QcKayitOnayFifthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QcKayitOnayFifthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QcKayitOnayFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
