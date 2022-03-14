import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PplHattiComponent } from './ppl-hatti.component';

describe('PplHattiComponent', () => {
  let component: PplHattiComponent;
  let fixture: ComponentFixture<PplHattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PplHattiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PplHattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
