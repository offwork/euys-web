import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsyFirinlarStandartHizGridComponent } from './ksy-firinlar-standart-hiz-grid.component';

describe('SimpleGridInputComponent', () => {
  let component: KsyFirinlarStandartHizGridComponent;
  let fixture: ComponentFixture<KsyFirinlarStandartHizGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KsyFirinlarStandartHizGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KsyFirinlarStandartHizGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
