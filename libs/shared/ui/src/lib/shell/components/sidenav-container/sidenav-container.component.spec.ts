import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { SidenavContainerComponent } from './sidenav-container.component';

describe('SidenavContainerComponent', () => {
  let spectator: Spectator<SidenavContainerComponent>;
  const createComponent = createComponentFactory(SidenavContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
