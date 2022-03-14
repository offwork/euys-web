import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsgucuGirisComponent } from './isgucu-giris.component';

describe('IsgucuGirisComponent', () => {
  let component: IsgucuGirisComponent;
  let fixture: ComponentFixture<IsgucuGirisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsgucuGirisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsgucuGirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
