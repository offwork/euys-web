import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunlerPickListComponent } from './urunler-pick-list.component';

describe('UrunlerPickListComponent', () => {
  let component: UrunlerPickListComponent;
  let fixture: ComponentFixture<UrunlerPickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunlerPickListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunlerPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
