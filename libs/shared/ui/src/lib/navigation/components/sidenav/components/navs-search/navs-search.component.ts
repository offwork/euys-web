import {
  Component,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'euys-navs-search',
  templateUrl: './navs-search.component.html',
  styleUrls: ['./navs-search.component.scss'],
})
export class NavsSearchComponent implements OnChanges {
  @Input() collapsed = false;
  @Input() filterActive = false;
  @Output() navsFilterHandler = new EventEmitter<string>();
  @Output() toggleSidenav = new EventEmitter<void>();
  filterValue = '';
  focusInput = false;

  @HostBinding('class.collapsed') get menuState() {
    return this.collapsed;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { collapsed, filterActive } = changes;
    if (filterActive && !filterActive.currentValue) this.filterValue = '';
    if (typeof collapsed !== 'undefined')
      this.focusInput = !collapsed.currentValue;
  }

  clearFilter() {
    this.filterHandler('');
  }

  filterHandler($event: string) {
    this.navsFilterHandler.emit($event);
  }

  activateFilter() {
    this.toggleSidenav.emit();
    this.focusInput = true;
  }
}
