import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpesifikasyonToolbarComponent } from './spesifikasyon-toolbar.component';

describe('SpesifikasyonToolbarComponent', () => {
  let component: SpesifikasyonToolbarComponent;
  let fixture: ComponentFixture<SpesifikasyonToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpesifikasyonToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpesifikasyonToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
