import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcKayitThirdStepComponent } from './qc-kayit-third-step.component';

describe('QcKayitThirdStepComponent', () => {
  let component: QcKayitThirdStepComponent;
  let fixture: ComponentFixture<QcKayitThirdStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QcKayitThirdStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QcKayitThirdStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
