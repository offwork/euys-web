import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuHedefFiiliGrafikComponent } from './du-hedef-fiili-grafik.component';

describe('HedefFiiliGrafikComponent', () => {
  let component: DuHedefFiiliGrafikComponent;
  let fixture: ComponentFixture<DuHedefFiiliGrafikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuHedefFiiliGrafikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuHedefFiiliGrafikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
