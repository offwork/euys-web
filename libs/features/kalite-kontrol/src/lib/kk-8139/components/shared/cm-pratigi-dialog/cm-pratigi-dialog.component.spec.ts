import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmPratigiDialogComponent } from './cm-pratigi-dialog.component';

describe('CmPratigiDialogComponent', () => {
  let component: CmPratigiDialogComponent;
  let fixture: ComponentFixture<CmPratigiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmPratigiDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmPratigiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
