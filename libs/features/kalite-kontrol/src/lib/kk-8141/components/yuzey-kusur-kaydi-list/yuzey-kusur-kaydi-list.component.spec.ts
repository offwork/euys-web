import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuzeyKusurKaydiListComponent } from './yuzey-kusur-kaydi-list.component';

describe('YuzeyKusurKaydiListComponent', () => {
  let component: YuzeyKusurKaydiListComponent;
  let fixture: ComponentFixture<YuzeyKusurKaydiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YuzeyKusurKaydiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YuzeyKusurKaydiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
