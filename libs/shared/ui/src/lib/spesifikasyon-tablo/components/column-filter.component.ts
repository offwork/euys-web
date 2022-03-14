import { Component, Input } from '@angular/core';

@Component({
  selector: 'euys-column-filter',
  templateUrl: './column-filter.component.html',
})
export class ColumnFilterComponent {
  @Input() type: 'text' | 'select' = 'text';
  @Input() matchMode: 'equals' | 'contains' | 'startsWith' = 'startsWith';
  @Input() options: string[] = [];
  @Input() field = '';

  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
