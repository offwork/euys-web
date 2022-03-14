/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl } from '@ngneat/reactive-forms';
import { Observable } from 'rxjs';

// TODO: types should be given as a option based on the input
// FormDateType = 'year' | 'month' ...
export type FormFieldType =
  | 'number'
  | 'string'
  | 'array'
  | 'boolean'
  | 'date'
  | 'range'
  | 'year'
  | 'month'
  | 'year-month';

export interface FormFieldSelectOption {
  disabled?: boolean;
  group?: Array<FormFieldSelectOption>;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

export interface FormFieldSchema {
  binary?: boolean;
  dateFormat?: string;
  disabled?: boolean;
  formControl: FormControl;
  horizontal?: boolean;
  inputId: string;
  label: string;
  maxDate?: Date;
  minDate?: Date;
  placeholder?: string;
  props?: Array<string>;
  options?: Observable<any>;
  optionLabel?: string;
  optionValue?: any;
  readonlyInput?: boolean;
  required?: boolean;
  selectionMode?: string;
  showClear?: boolean;
  type?: FormFieldType | null;
  view?: string;
  yearNavigator?: boolean;
  yearRange?: string;
}
