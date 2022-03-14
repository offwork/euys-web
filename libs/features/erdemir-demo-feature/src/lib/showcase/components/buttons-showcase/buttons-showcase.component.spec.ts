import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsShowcaseComponent } from './buttons-showcase.component';

describe('ButtonsShowcaseComponent', () => {
  let component: ButtonsShowcaseComponent;
  let fixture: ComponentFixture<ButtonsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
