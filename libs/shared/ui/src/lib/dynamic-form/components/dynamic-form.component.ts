/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ValidationErrors, Validators, AbstractControl } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  AsyncValidatorFn,
} from '@ngneat/reactive-forms';
import { Observable, of, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DynamicFormControl, FieldType } from '../model/dynamic-form-control';

export const validationBySelected: AsyncValidatorFn = (
  control: AbstractControl
): Observable<ValidationErrors | null> => {
  const { value } = control;
  return value !== null ? of({ mismatch: false }) : of(null);
};

@Component({
  selector: 'euys-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() formId = 'form';
  @Input() formControls!: DynamicFormControl[];
  @Input() update!: boolean;
  @Input() selectedRow!: Observable<any>;
  @Output() dispatchFormValue = new EventEmitter<any>();

  dynamicFormGroup!: FormGroup;
  _endSubcription = new Subject<boolean>();

  ngOnInit() {
    const control = this.formControls.reduce((acc, cur) => {
      // @ts-ignore
      acc[cur.controlName] = new FormControl(
        null,
        cur.required && Validators.required
      );
      return acc;
    }, {});

    this.dynamicFormGroup = new FormGroup(control);

    // TODO: need to rethink `cross field validation`
    // this code snippet does not belong here
    this.dynamicFormGroup
      ?.get('numuneBazKodu')
      ?.valueChanges.pipe(filter(Boolean), takeUntil(this._endSubcription))
      .subscribe(val => {
        if (val !== 1 && val !== 3) {
          this.dynamicFormGroup
            ?.get('tonaj')
            .setValidators(Validators.required);
          this.dynamicFormGroup?.get('tonaj').enable();
        } else {
          this.dynamicFormGroup?.get('tonaj').clearValidators();
          this.dynamicFormGroup?.get('tonaj').setValue(null);
          this.dynamicFormGroup?.get('tonaj').disable();
        }
      });

    this.selectedRow
      ?.pipe(filter(Boolean), takeUntil(this._endSubcription))
      .subscribe(row => {
        const controls = {};
        this.formControls.forEach(elm => {
          // @ts-ignore
          controls[elm.controlName] = row[elm.controlName];
        });
        this.update
          ? this.dynamicFormGroup.setValue(controls)
          : this.dynamicFormGroup.reset({});
      });
  }

  sendFormValue() {
    if (
      this.dynamicFormGroup.touched &&
      this.dynamicFormGroup.status === 'VALID'
    ) {
      const values = {};
      Object.keys(this.dynamicFormGroup.value).forEach((key, idx) => {
        // @ts-ignore
        values[key] = this.__fieldTypeReduce(
          this.formControls[idx].type,
          this.dynamicFormGroup.value[key]
        );
      });
      this.dispatchFormValue.emit(values);
    }
  }

  ngOnDestroy() {
    this._endSubcription.next(true);
    this._endSubcription.complete();
  }

  /**
   * @private Documentation
   * Determines whether field type reduce
   * @param type
   * @param value
   * @returns
   */
  __fieldTypeReduce(type: FieldType, value: unknown) {
    if (!value) {
      return value;
    }

    switch (type) {
      case 'number':
        return Number(value);
      case 'string':
        return String(value);
      case 'boolean':
        return Boolean(value);
      case 'array':
        return String(value);
      case 'decimal':
        return Number(value);

      default:
        return Number(value);
    }
  }
}
