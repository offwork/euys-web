import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuzeyKusurKaydiComponent } from './yuzey-kusur-kaydi.component';

describe('YuzeyKusurKaydiComponent', () => {
  let component: YuzeyKusurKaydiComponent;
  let fixture: ComponentFixture<YuzeyKusurKaydiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YuzeyKusurKaydiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YuzeyKusurKaydiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
