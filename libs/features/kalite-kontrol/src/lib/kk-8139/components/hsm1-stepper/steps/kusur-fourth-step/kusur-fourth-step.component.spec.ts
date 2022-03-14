import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KusurFourthStepComponent } from './kusur-fourth-step.component';

describe('KusurFourthStepComponent', () => {
  let component: KusurFourthStepComponent;
  let fixture: ComponentFixture<KusurFourthStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KusurFourthStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KusurFourthStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
