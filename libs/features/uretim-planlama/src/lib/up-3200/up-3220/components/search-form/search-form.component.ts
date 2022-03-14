import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'euys-up3220-search-form',
  templateUrl: './search-form.component.html',
})
export class SearchFormComponent {
  @Output() search = new EventEmitter();

  onSearch() {
    this.search.emit();
  }
}
