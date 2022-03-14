import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaporIndirmeComponent } from './rapor-indirme.component';

describe('RaporIndirmeComponent', () => {
  let component: RaporIndirmeComponent;
  let fixture: ComponentFixture<RaporIndirmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaporIndirmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaporIndirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
