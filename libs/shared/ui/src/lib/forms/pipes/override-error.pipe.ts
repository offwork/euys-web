import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({ name: 'overrideError' })
export class OverrideErrorPipe implements PipeTransform {
  _standardAngularValidators = [
    'max',
    'min',
    'required',
    'requiredTrue',
    'email',
    'minLength',
    'maxLength',
    'pattern',
    'nullValidator',
    'compose',
  ];

  transform(value: ValidationErrors, args?: string): ValidationErrors {
    if (this.__matchValidators(Object.keys(value || {}))) {
      const overrideError = JSON.parse(JSON.stringify(value || {}));
      const overrideFirstKey = Object.keys(overrideError || {})[0];
      overrideError[overrideFirstKey] = args;
      return overrideError;
    }

    return value;
  }

  __matchValidators(validators: string[]) {
    return this._standardAngularValidators.some(items =>
      validators.includes(items)
    );
  }
}
