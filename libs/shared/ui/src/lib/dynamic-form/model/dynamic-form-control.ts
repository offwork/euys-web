import { Observable } from 'rxjs';

export type FieldType = 'number' | 'string' | 'array' | 'boolean' | 'decimal';

export interface SelectOption {
  disabled?: boolean;
  group?: Array<SelectOption>;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}
export interface DynamicFormControl {
  id: number;
  label: string;
  controlName: string;
  required?: boolean;
  type?: FieldType | null;
  options?:
    | Array<Record<string, unknown>>
    | Observable<Array<Record<string, unknown>> | unknown>;
  props?: Array<string>;
  decimalSize?: number;
}
