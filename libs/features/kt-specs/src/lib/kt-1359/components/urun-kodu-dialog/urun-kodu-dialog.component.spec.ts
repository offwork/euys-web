import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunKoduDialogComponent } from './urun-kodu-dialog.component';

describe('UrunKoduDialogComponent', () => {
  let component: UrunKoduDialogComponent;
  let fixture: ComponentFixture<UrunKoduDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunKoduDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunKoduDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
