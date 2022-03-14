import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmPratigiDialogComponent } from './sm-pratigi-dialog.component';

describe('SmPratigiDialogComponent', () => {
  let component: SmPratigiDialogComponent;
  let fixture: ComponentFixture<SmPratigiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmPratigiDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmPratigiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
