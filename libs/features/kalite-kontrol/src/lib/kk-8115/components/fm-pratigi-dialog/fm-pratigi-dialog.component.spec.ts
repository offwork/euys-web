import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmPratigiDialogComponent } from './fm-pratigi-dialog.component';

describe('FmPratigiDialogComponent', () => {
  let component: FmPratigiDialogComponent;
  let fixture: ComponentFixture<FmPratigiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmPratigiDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmPratigiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
