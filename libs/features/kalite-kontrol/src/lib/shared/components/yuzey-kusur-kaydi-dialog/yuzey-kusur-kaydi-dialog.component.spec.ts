import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuzeyKusurKaydiDialogComponent } from './yuzey-kusur-kaydi-dialog.component';

describe('YuzeyKusurKaydiDialogComponent', () => {
  let component: YuzeyKusurKaydiDialogComponent;
  let fixture: ComponentFixture<YuzeyKusurKaydiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YuzeyKusurKaydiDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YuzeyKusurKaydiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
