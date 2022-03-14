import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumuneGoruntulemeSecondStepComponent } from './numune-goruntuleme-second-step.component';

describe('NumuneGoruntulemeSecondStepComponent', () => {
  let component: NumuneGoruntulemeSecondStepComponent;
  let fixture: ComponentFixture<NumuneGoruntulemeSecondStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumuneGoruntulemeSecondStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumuneGoruntulemeSecondStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
