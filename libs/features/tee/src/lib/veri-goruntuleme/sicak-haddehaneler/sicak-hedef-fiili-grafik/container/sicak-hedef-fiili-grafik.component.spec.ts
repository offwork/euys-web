import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SicakHedefFiiliGrafikComponent } from './sicak-hedef-fiili-grafik.component';

describe('HedefFiiliGrafikComponent', () => {
  let component: SicakHedefFiiliGrafikComponent;
  let fixture: ComponentFixture<SicakHedefFiiliGrafikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SicakHedefFiiliGrafikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SicakHedefFiiliGrafikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
