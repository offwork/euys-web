import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class EuysValidators {
  static maxDate(value: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.touched) return null;

      if (control.touched && control.value > value) {
        return {
          'date-error': 'Greater than available date!',
        };
      }
    };
  }

  static minDate(value: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.touched) return null;

      if (control.touched && control.value < value) {
        return {
          'date-error': 'Less than available date!',
        };
      }
    };
  }
}
