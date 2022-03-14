import { Directive, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@ngneat/reactive-forms';
import { Subject } from 'rxjs';

@Directive()
export abstract class FromField<T> extends ControlValueAccessor {
  /**
   * Output  of from field
   *
   * @description Allows the host to catch the changes.
   */
  @Output() changes = new Subject<T>();

  _disable: boolean;
  @Input() set disable(val: boolean) {
    this._disable = val;
  }

  get disable() {
    return this._disable;
  }

  _label: string;
  @Input() set label(val: string) {
    this._label = val;
  }

  get label() {
    return this._label;
  }

  _horizontal: boolean;
  @Input() set horizontal(val: boolean) {
    this._horizontal = val;
  }

  get horizontal() {
    return this._horizontal;
  }

  _inputId: string;
  @Input() set inputId(val: string) {
    this._inputId = val;
  }

  get inputId() {
    return this._inputId;
  }

  _formControl: FormControl<T>;
  @Input() set formControl(ctrl: FormControl<T>) {
    this._formControl = ctrl;
  }

  get formControl() {
    return this._formControl;
  }

  get hasError() {
    return Boolean(
      this._formControl && this._formControl.touched && this._formControl.errors
    );
  }

  writeValue(val: T): void {
    if (val) {
      this._formControl.setValue(val, { onlySelf: true });
      if (this._disable) {
        this._formControl.setDisable(this._disable);
      }
    }
  }
}
