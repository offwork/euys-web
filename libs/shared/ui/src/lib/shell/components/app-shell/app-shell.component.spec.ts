import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { AppShellComponent } from './app-shell.component';

describe('AppShellComponent', () => {
  let spectator: Spectator<AppShellComponent>;
  const createComponent = createComponentFactory(AppShellComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
