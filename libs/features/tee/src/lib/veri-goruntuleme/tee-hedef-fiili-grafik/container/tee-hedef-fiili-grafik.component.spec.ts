import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeeHedefFiiliGrafikComponent } from './tee-hedef-fiili-grafik.component';

describe('HedefFiiliGrafikComponent', () => {
  let component: TeeHedefFiiliGrafikComponent;
  let fixture: ComponentFixture<TeeHedefFiiliGrafikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeeHedefFiiliGrafikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeeHedefFiiliGrafikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
