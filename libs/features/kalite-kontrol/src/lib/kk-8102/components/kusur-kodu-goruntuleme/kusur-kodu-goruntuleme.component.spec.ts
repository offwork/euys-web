import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KusurKoduGoruntulemeComponent } from './kusur-kodu-goruntuleme.component';

describe('KusurKoduGoruntulemeComponent', () => {
  let component: KusurKoduGoruntulemeComponent;
  let fixture: ComponentFixture<KusurKoduGoruntulemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KusurKoduGoruntulemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KusurKoduGoruntulemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
