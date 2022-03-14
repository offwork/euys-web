import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { TableMultiSelectItemDirective } from '../directives/table-multi-select-item.directive';

@Component({
  selector: 'euys-table-multi-select',
  templateUrl: './table-multi-select.component.html',
  styleUrls: ['./table-multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TableMultiSelectComponent,
    },
  ],
})
export class TableMultiSelectComponent implements ControlValueAccessor {
  @Input()
  options: any[] = [];
  @Input()
  optionLabel?: string;
  @Input()
  optionValue?: string;
  @Input()
  optionSelect?: string;
  selected: any[] = [];
  @Input()
  disabled = false;
  @Input()
  compareFn?: (a: any, b: any) => boolean;
  @ContentChild(TableMultiSelectItemDirective)
  optionValueTemplate?: TableMultiSelectItemDirective;

  touched = false;
  skeletonRows: number[] = [1, 2];
  skeletonCols: number[] = [1, 2, 3, 4];

  constructor() {
    console.log('construct!');
  }
  writeValue(value: any): void {
    if (Array.isArray(value)) {
      const defaultCompareFn = (a: any, b: any) => a === b;
      const compareFn = this.compareFn || defaultCompareFn;
      this.selected = this.options.filter(option =>
        this.optionValue
          ? value.includes(option[this.optionValue])
          : !!value.find(x => compareFn(x, option))
      );
    } else this.selected = [];
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange?: (value: any) => void = (value: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched?: () => void = () => {};

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  onSelectChange() {
    this.markAsTouched();
    let value = this.selected.length ? this.selected : null;
    if (this.optionValue && !!value) {
      value = value.map(item => item[this.optionValue]);
    }
    this.onChange(value);
  }
}
