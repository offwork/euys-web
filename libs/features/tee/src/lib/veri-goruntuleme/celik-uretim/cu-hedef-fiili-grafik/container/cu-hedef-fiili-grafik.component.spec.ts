import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuHedefFiiliGrafikComponent } from './cu-hedef-fiili-grafik.component';

describe('HedefFiiliGrafikComponent', () => {
  let component: CuHedefFiiliGrafikComponent;
  let fixture: ComponentFixture<CuHedefFiiliGrafikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuHedefFiiliGrafikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuHedefFiiliGrafikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
