import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunKoduListComponent } from './urun-kodu-list.component';

describe('UrunKoduListComponent', () => {
  let component: UrunKoduListComponent;
  let fixture: ComponentFixture<UrunKoduListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunKoduListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunKoduListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
