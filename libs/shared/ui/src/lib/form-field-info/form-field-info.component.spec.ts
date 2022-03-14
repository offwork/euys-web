import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldInfoComponent } from './form-field-info.component';

describe('FormFieldInfoComponent', () => {
  let component: FormFieldInfoComponent;
  let fixture: ComponentFixture<FormFieldInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
