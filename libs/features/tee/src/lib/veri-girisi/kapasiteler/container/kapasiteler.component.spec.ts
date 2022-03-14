import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapasitelerComponent } from './kapasiteler.component';

describe('KapasitelerComponent', () => {
  let component: KapasitelerComponent;
  let fixture: ComponentFixture<KapasitelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KapasitelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KapasitelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
