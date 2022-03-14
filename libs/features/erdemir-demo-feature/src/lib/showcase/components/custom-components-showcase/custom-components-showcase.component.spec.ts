import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponentsShowcaseComponent } from './custom-components-showcase.component';

describe('CustomComponentsShowcaseComponent', () => {
  let component: CustomComponentsShowcaseComponent;
  let fixture: ComponentFixture<CustomComponentsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomComponentsShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomComponentsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
