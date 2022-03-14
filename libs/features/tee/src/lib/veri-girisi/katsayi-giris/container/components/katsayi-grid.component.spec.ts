import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatsayiGridComponent } from './katsayi-grid.component';

describe('KatsayiGridComponent', () => {
  let component: KatsayiGridComponent;
  let fixture: ComponentFixture<KatsayiGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatsayiGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatsayiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
