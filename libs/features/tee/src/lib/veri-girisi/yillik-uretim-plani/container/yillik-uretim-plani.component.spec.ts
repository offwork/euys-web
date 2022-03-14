import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YillikUretimPlaniComponent } from './yillik-uretim-plani.component';

describe('YillikUretimPlaniComponent', () => {
  let component: YillikUretimPlaniComponent;
  let fixture: ComponentFixture<YillikUretimPlaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YillikUretimPlaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YillikUretimPlaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
