import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';
import { Navs } from '@euys/api-interfaces';
import { SideNavProps } from '../../../../model/side-nav-props';

@Component({
  selector: 'euys-vertical-navs-container',
  templateUrl: './vertical-navs-container.component.html',
  styleUrls: ['./vertical-navs-container.component.scss'],
})
export class VerticalNavsContainerComponent {
  @Input() activeList = false;
  @Input() navs!: Navs[];
  @Input() sideNavProps: SideNavProps;
  @Input() collapsed = true;
  @Input() filterActive = false;
  @Input() filterValue: string;
  @Output() activeListSetter = new EventEmitter<boolean>();

  @HostBinding('class.collapsed') get menuState() {
    return this.collapsed;
  }

  activeListHandler(isActive: boolean) {
    this.activeListSetter.emit(isActive);
  }
}
