import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsShowcaseComponent } from './inputs-showcase.component';

describe('InputsShowcaseComponent', () => {
  let component: InputsShowcaseComponent;
  let fixture: ComponentFixture<InputsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
