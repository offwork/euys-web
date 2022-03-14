import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabaHaddelemeDialogComponent } from './kaba-haddeleme-dialog.component';

describe('KabaHaddelemeDialogComponent', () => {
  let component: KabaHaddelemeDialogComponent;
  let fixture: ComponentFixture<KabaHaddelemeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabaHaddelemeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KabaHaddelemeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
