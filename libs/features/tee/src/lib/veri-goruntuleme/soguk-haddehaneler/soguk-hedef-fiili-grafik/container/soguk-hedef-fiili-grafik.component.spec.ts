import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SogukHedefFiiliGrafikComponent } from './soguk-hedef-fiili-grafik.component';

describe('HedefFiiliGrafikComponent', () => {
  let component: SogukHedefFiiliGrafikComponent;
  let fixture: ComponentFixture<SogukHedefFiiliGrafikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SogukHedefFiiliGrafikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SogukHedefFiiliGrafikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
