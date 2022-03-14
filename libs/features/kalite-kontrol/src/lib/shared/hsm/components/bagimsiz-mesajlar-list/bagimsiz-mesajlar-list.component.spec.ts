import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagimsizMesajlarListComponent } from './bagimsiz-mesajlar-list.component';

describe('BagimsizMesajlarListComponent', () => {
  let component: BagimsizMesajlarListComponent;
  let fixture: ComponentFixture<BagimsizMesajlarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagimsizMesajlarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagimsizMesajlarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
