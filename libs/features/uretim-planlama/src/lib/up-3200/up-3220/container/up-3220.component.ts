import { Component } from '@angular/core';

@Component({
  selector: 'euys-up3220',
  templateUrl: './up-3220.component.html',
})
export class Up3220Component {
  phase: 'search' | 'table' | 'create' | 'update' = 'search';

  onSearch() {
    this.phase = 'table';
  }
}
