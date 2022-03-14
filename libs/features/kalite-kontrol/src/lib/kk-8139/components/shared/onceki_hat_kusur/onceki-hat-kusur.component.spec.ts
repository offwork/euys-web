import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OncekiHatKusurComponent } from './onceki-hat-kusur.component';

describe('OncekiHatKusurComponent', () => {
  let component: OncekiHatKusurComponent;
  let fixture: ComponentFixture<OncekiHatKusurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OncekiHatKusurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OncekiHatKusurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
