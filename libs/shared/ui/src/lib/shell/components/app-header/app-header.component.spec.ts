import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { AppHeaderComponent } from './app-header.component';

describe('AppHeaderComponent', () => {
  let spectator: Spectator<AppHeaderComponent>;
  const createComponent = createComponentFactory(AppHeaderComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
