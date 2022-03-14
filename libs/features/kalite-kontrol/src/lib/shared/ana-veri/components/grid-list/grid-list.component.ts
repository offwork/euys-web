import { Component, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ApiInterfaceBase } from '@euys/api-interfaces';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'euys-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: GridListComponent,
    },
  ],
})
export class GridListComponent<T extends ApiInterfaceBase>
  implements ControlValueAccessor
{
  @Input()
  label!: string;
  @Input()
  mappingFn: (val: string, index: number) => T;
  @Input()
  field!: keyof T;
  @Input()
  maxRecords?: number;

  @ViewChild('inputOverlay')
  inputOverlayComponent: OverlayPanel;

  disableAdd = false;

  list: T[] = [];
  onChange = (value: T[]) => {
    // noop
  };
  onTouched = () => {
    // noop
  };

  constructor() {
    console.log('construct');
  }
  registerOnChange(fn: (value: T[]) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  deleteAt(index: number) {
    this.list = this.list
      .filter((item, i) => i !== index)
      .map((data, i) => this.mappingFn(data[this.field].toString(), i));
    this.onChange(this.list);
    this.disableAdd = false;
  }

  add(element: HTMLInputElement, event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    const value = element.value;
    const belowMax = !this.maxRecords || this.list.length < this.maxRecords;
    if (value && value.trim() && belowMax) {
      const addendum = [value.trim()].map(val =>
        this.mappingFn(val, this.list.length)
      );
      this.list = this.list.concat(addendum);
      this.onChange(this.list);
      if (this.maxRecords && this.list.length === this.maxRecords) {
        this.disableAdd = true;
      }
      element.value = null;
    } else if (value && value.trim()) {
      this.showInputOverlay(event, element);
    }
  }

  private showInputOverlay(event: Event, element: HTMLInputElement) {
    this.inputOverlayComponent.show(event, element);
    setTimeout(() => {
      this.inputOverlayComponent.hide();
    }, 5000);
  }

  writeValue(value: T[]): void {
    if (!value) {
      this.list = [];
    } else this.list = value;
  }

  stopEnterPropagation(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}
