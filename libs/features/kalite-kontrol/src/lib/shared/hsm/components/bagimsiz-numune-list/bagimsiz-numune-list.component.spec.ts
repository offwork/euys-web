import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagimsizNumuneListComponent } from './bagimsiz-numune-list.component';

describe('BagimsizNumuneListComponent', () => {
  let component: BagimsizNumuneListComponent;
  let fixture: ComponentFixture<BagimsizNumuneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagimsizNumuneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagimsizNumuneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
