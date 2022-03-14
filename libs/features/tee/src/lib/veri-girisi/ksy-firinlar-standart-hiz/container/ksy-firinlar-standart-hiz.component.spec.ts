import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsyFirinlarStandartHizComponent } from './ksy-firinlar-standart-hiz.component';

describe('KsyFirinlarStandartHizComponent', () => {
  let component: KsyFirinlarStandartHizComponent;
  let fixture: ComponentFixture<KsyFirinlarStandartHizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KsyFirinlarStandartHizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KsyFirinlarStandartHizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
