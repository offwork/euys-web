import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'euys-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'euys-form-field-error',
  },
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  animations: [
    trigger('slideDownUp', [
      transition(':enter', [style({ height: 0 }), animate(400)]),
      transition(':leave', [animate(400, style({ height: 0 }))]),
    ]),
  ],
})
export class FormFieldErrorComponent {
  message!: string;

  _errorMessage!: ValidationErrors;
  @Input() set errorMessage(value: ValidationErrors) {
    if (value) {
      const key = Object.keys(value)[0];
      this.message = value[key];
      this._errorMessage = value;
    } else {
      this._errorMessage = null;
    }

    this._cdRef.detectChanges();
  }

  get errorMessage() {
    return this._errorMessage;
  }

  constructor(private _cdRef: ChangeDetectorRef) {}
}
