import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HostBinding } from '@angular/core';

@Component({
  selector: 'euys-min-max-fieldset',
  styleUrls: ['./min-max-fieldset.component.scss'],
  templateUrl: './min-max-fieldset.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MinMaxFieldsetComponent implements OnInit {
  public minMaxFieldForm: FormGroup;

  @Input() helperTextMaximum = 'Lüften maximum değeri giriniz.';
  @Input() helperTextMinimum = 'Lürfen minimum değeri giriniz.';

  @Input() isFormElement = true;
  @Input() label = '';

  @Input() maxDefaultValue = 0.0;
  @Input() maxFormControlName = '';
  @Input() maxPlaceholder = '';

  @Input() minDefaultValue = 0.0;
  @Input() minFormControlName = '';
  @Input() minPlaceholder = '';

  @Input() minFractionDigits = 2;
  @Input() maxFractionDigits = 3;

  minmin = 0.0;
  minmax = 2147483647.0;

  maxmin = 0.0;
  maxmax = 2147483647.0;

  @Input() pCol12 = true;
  @Input() pMD6 = true;
  @Input() required = true;
  fluid = true;
  formGrid = true;
  pField = true;
  pGrid = true;
  pml0 = true;
  pmr0 = true;

  @HostBinding('class.p-col-12') get getPCol12() {
    return this.pCol12;
  }
  @HostBinding('class.p-md-6') get getPMD6() {
    return this.pMD6;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    const formObject = this.createFormObject(false);
    this.createFormFields(formObject);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createFormFields(formObject: any) {
    this.minMaxFieldForm = this.formBuilder.group(formObject);
  }

  createFormObject(initializing: boolean) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const retObj: any = {
      [this.minFormControlName]: [
        {
          value: initializing
            ? parseFloat('0.00')
            : parseFloat(this.minDefaultValue.toString()),
          disabled: false,
        },
        this.required ? Validators.required : undefined,
      ],
      [this.maxFormControlName]: [
        {
          value: initializing
            ? parseFloat('0.00')
            : parseFloat(this.maxDefaultValue.toString()),
          disabled: false,
        },
        this.required ? Validators.required : undefined,
      ],
    };
    return retObj;
  }

  getValue() {
    const retValue = this.minMaxFieldForm.getRawValue();
    return retValue;
  }

  get minControl() {
    return this.minMaxFieldForm.get(this.minFormControlName);
  }

  get maxControl() {
    return this.minMaxFieldForm.get(this.maxFormControlName);
  }
}
