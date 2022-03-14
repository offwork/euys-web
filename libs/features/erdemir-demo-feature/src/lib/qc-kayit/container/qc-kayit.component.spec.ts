import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QCKayitComponent } from './qc-kayit.module.component';

describe('QCKayitComponent', () => {
  let component: QCKayitComponent;
  let fixture: ComponentFixture<QCKayitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QCKayitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QCKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
