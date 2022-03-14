import { Directive, Host, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PickList } from 'primeng/picklist';

@Directive({
  selector: 'p-pickList[euysPicklistFormControl]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PicklistFormControlDirective,
      multi: true,
    },
  ],
})
export class PicklistFormControlDirective
  implements OnInit, ControlValueAccessor
{
  private _options: any[];
  @Input()
  compareFn = (a: any, b: any) => a === b;
  onChange: (value: any[]) => void = value => {
    /* noop */
  };
  onTouched: any = () => {
    /* noop */
  };

  constructor(@Host() private component: PickList) {
    console.log('customFormControl Directive. PickList:', component);
  }
  ngOnInit(): void {
    this._options = [...this.component.source];
  }
  writeValue(value: any[]): void {
    this.component.target = Array.isArray(value) ? [...value] : [];
    if (!value?.length) {
      this.component.source = [...this._options];
    } else
      this.component.source = this._options.filter(option =>
        value.every(element => !this.compareFn(option, element))
      );
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.component.disabled = isDisabled;
  }

  @HostListener('onMoveToTarget', ['$event'])
  onPicklistChange() {
    this.onChange(this.component.target);
  }
}
