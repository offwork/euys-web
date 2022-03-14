import { Component } from '@angular/core';

@Component({
  selector: 'euys-table-column-expander',
  templateUrl: './table-column-expander.component.html',
})
export class TableColumnExpanderComponent {
  editMeFirst(editMeFirst: Event) {
    console.log(editMeFirst);
  }
}
