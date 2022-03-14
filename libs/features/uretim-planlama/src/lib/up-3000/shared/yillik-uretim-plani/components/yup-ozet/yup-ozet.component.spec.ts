import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YupOzetComponent } from './yup-ozet.component';

describe('YupOzetComponent', () => {
  let component: YupOzetComponent;
  let fixture: ComponentFixture<YupOzetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YupOzetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YupOzetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
