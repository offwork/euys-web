import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'euys-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToggleButtonComponent {
  @Input() collapsed = false;
  @Output() toggleSidenavClick = new EventEmitter<void>();

  @HostBinding('class.collapsed') get menuState() {
    return this.collapsed;
  }

  toggleSidenavClickHandler() {
    this.toggleSidenavClick.emit();
  }
}
