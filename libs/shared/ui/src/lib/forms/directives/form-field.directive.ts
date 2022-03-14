import { Directive, Input, OnInit, Self } from '@angular/core';
import { NgControl, ValidatorFn } from '@angular/forms';

@Directive({ selector: '[euysOverrideFormFieldValidators]' })
export class FormFieldDirective implements OnInit {
  @Input() euysOverrideFormFieldValidators: Array<ValidatorFn>;
  // The NgControl Class injected into the constructor function
  // allows you to access the methods and properties of
  // the AbstractControl Class regardless of the component(s).
  constructor(@Self() private ngControl: NgControl) {}

  ngOnInit() {
    // sets validate method(s) for formControl
    this.ngControl.control.setValidators(this.euysOverrideFormFieldValidators);
    // When you add or remove a validator at run time, you must call
    // updateValueAndValidity() for the new validation to take effect.
    this.ngControl.control.updateValueAndValidity();
  }
}
