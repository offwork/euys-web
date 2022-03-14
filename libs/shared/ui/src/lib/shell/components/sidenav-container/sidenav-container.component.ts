import { Component, Input, ViewEncapsulation } from '@angular/core';
import {
  toggle,
  profileToggle,
  ToggleSidenav,
} from '../../animations/sidenav.animation';

@Component({
  selector: 'euys-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss'],
  animations: [toggle, profileToggle],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavContainerComponent {
  _expanded: boolean;
  @Input() set expanded(value: boolean) {
    this._expanded = value;
    this.toggleMenu();
  }
  get expanded() {
    return this._expanded;
  }

  _expandedProfile: boolean;
  @Input() set expandedProfile(value: boolean) {
    this._expandedProfile = value;
    this.toggleProfile();
  }
  get expandedProfile() {
    return this._expandedProfile;
  }

  toggleSidenav: ToggleSidenav;
  profileToggle: ToggleSidenav;

  toggleMenu() {
    this.toggleSidenav = this.expanded
      ? { value: 'expand', params: { width: 524 } }
      : { value: 'narrow', params: { width: 44 } };
  }

  toggleProfile() {
    this.profileToggle = this.expandedProfile
      ? { value: 'expand', params: { width: 298 } }
      : { value: 'narrow', params: { width: 0 } };
  }
}
