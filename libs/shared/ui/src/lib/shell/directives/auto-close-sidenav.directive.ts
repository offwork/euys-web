import { Directive } from '@angular/core';
import { AppShellComponent } from '../components/app-shell/app-shell.component';

@Directive({
  selector: '[euysAutoCloseSidenav]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '(click)': 'hostClickListener($event)',
  },
})
export class AutoCloseSidenavDirective {
  constructor(private hostRef: AppShellComponent) {}

  hostClickListener(event: MouseEvent) {
    event.stopPropagation();
    if (this.hostRef.sideNavContainer.profileToggle) {
      if (this.hostRef.sideNavContainer.profileToggle.value === 'expand') {
        const element = event.target as HTMLElement;
        if (
          element.id !== 'profile-button' &&
          element.id !== 'profile-sidenav'
        ) {
          // this.hostRef.toggleProfile();
        }
      }
    }
  }
}
