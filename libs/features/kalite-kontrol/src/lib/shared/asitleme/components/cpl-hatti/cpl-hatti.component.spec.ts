import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CplHattiComponent } from './cpl-hatti.component';

describe('CplHattiComponent', () => {
  let component: CplHattiComponent;
  let fixture: ComponentFixture<CplHattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CplHattiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CplHattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
