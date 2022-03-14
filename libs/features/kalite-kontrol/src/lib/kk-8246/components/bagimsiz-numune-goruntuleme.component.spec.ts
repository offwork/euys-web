import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagimsizNumuneGoruntulemeComponent } from './bagimsiz-numune-goruntuleme.component';

describe('BagimsizNumuneGoruntulemeComponent', () => {
  let component: BagimsizNumuneGoruntulemeComponent;
  let fixture: ComponentFixture<BagimsizNumuneGoruntulemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagimsizNumuneGoruntulemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagimsizNumuneGoruntulemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
