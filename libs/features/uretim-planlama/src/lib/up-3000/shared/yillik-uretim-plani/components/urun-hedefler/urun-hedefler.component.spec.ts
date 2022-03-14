import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunHedeflerComponent } from './urun-hedefler.component';

describe('UrunHedeflerComponent', () => {
  let component: UrunHedeflerComponent;
  let fixture: ComponentFixture<UrunHedeflerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunHedeflerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunHedeflerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
