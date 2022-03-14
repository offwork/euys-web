/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FromField } from '../../impl/from-field';

@Component({
  selector: 'euys-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DropdownInputComponent extends FromField<any> {
  /**
   * *** Inputs of DropdownInputComponent ***
   * These inputs provide the properties that PrimeNg lib needs.
   *
   * Notice that the class extends the FromField<T>
   */
  @Input() options!: Array<any>;
  @Input() optionLabel!: string;
  @Input() optionValue!: any;
  @Input() showClear!: boolean;
  @Input() placeholder!: string;
}
