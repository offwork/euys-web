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
  selector: 'euys-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DateInputComponent extends FromField<Date> {
  /**
   * *** Inputs of DateInputComponent ***
   * These inputs provide the properties that PrimeNg lib needs.
   *
   * Notice that the class extends the FromField<T>
   */
  @Input() view = 'date';
  @Input() dateFormat!: string;
  @Input() readonlyInput!: boolean;
  @Input() selectionMode = 'single';
  @Input() yearNavigator!: boolean;
  @Input() yearRange!: string;
  @Input() maxDate!: Date;
  @Input() minDate!: Date;
}
