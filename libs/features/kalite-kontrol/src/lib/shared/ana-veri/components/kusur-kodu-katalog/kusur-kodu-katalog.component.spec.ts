import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KusurKoduKatalogComponent } from './kusur-kodu-katalog.component';

describe('KusurKoduKatalogComponent', () => {
  let component: KusurKoduKatalogComponent;
  let fixture: ComponentFixture<KusurKoduKatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KusurKoduKatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KusurKoduKatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
