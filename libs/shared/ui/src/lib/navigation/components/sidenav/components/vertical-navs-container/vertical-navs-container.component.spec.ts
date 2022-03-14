import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalNavsContainerComponent } from './vertical-navs-container.component';

describe('VerticalNavsContainerComponent', () => {
  let component: VerticalNavsContainerComponent;
  let fixture: ComponentFixture<VerticalNavsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalNavsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalNavsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
