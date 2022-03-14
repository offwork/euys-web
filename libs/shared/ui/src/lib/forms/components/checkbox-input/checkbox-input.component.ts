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
  selector: 'euys-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxInputComponent extends FromField<boolean> {
  /**
   * *** Inputs of DateInputComponent ***
   * These inputs provide the properties that PrimeNg lib needs.
   *
   * Notice that the class extends the FromField<T>
   */

  /**
   * @description
   *
   * should be used with the same `name` if you want grouping
   */
  @Input() name!: string;
  /**
   * @description
   *
   * dynamic values can be given for multiple uses in iterations like `ngFor`
   */
  @Input() value!: string;
  /**
   * @description
   *
   * Allows to select a `boolean` value instead of multiple values.
   */
  @Input() binary!: boolean;
}
