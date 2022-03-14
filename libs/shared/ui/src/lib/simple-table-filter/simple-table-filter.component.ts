import { Component, Input } from '@angular/core';

@Component({
  selector: 'euys-simple-table-filter',
  templateUrl: './simple-table-filter.component.html',
})
export class SimpleTableFilterComponent {
  @Input() type: string;
  @Input() field: string;
}
