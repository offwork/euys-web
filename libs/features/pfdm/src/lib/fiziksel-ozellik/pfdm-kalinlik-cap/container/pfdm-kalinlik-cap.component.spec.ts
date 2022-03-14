import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfdmKalinlikCapComponent } from './pfdm-kalinlik-cap.component';

describe('PfdmKalinlikCapComponent', () => {
  let component: PfdmKalinlikCapComponent;
  let fixture: ComponentFixture<PfdmKalinlikCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfdmKalinlikCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfdmKalinlikCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
