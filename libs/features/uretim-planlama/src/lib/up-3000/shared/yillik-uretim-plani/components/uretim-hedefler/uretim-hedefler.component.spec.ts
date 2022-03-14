import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UretimHedeflerComponent } from './uretim-hedefler.component';

describe('UretimHedeflerComponent', () => {
  let component: UretimHedeflerComponent;
  let fixture: ComponentFixture<UretimHedeflerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UretimHedeflerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UretimHedeflerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
