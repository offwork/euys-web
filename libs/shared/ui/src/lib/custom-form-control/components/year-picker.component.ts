import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { range } from 'lodash';

/**
 * TODO:
 * Tekbaşına bir form control için modül yaratmak çok gereksiz ayrıca
 * isimlendirme de kötü! İletişim sorun halinde büyüyor ve kod tabanında
 * bir birine benzer ya da birbirini taklit eden kodlarla boşuna büyüyor.
 *
 * Lütfen: libs/shared/ui/src/lib/forms/forms.module.ts uygulamayı inceleyin!
 *
 */

@Component({
  selector: 'euys-year-picker',
  templateUrl: './year-picker.component.html',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'relative inline-block' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: YearPickerComponent,
      multi: true,
    },
  ],
})
export class YearPickerComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() inputId = '';
  @Input() placeholder = 'Seçiniz';
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onChange = new EventEmitter<string>();
  value: string;
  pickerVisible = false;
  range = range(0, 10);
  base = 2020;

  @HostListener('click', ['$event'])
  clicked(event: Event) {
    event.stopPropagation();
  }
  @HostListener('document:click')
  clickedOut() {
    this.pickerVisible = false;
  }

  showPicker() {
    const numberValue = Number(this.value);
    this.base = Number(numberValue - (numberValue % 10));
    this.pickerVisible = true;
  }

  setValue(value: number | string) {
    this.value = String(value);
    this.onModelChange(this.value);
    this.onChange.emit(this.value);
    this.pickerVisible = false;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onModelChange = (value: string) => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  writeValue(value: string) {
    this.value = value;
    this.onModelChange(this.value);
  }
  registerOnChange(fn: (_: string) => void) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
