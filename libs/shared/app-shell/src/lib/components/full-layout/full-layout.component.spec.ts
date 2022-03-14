import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { FullLayoutComponent } from './full-layout.component';

describe('FullLayoutComponent', () => {
  let spectator: Spectator<FullLayoutComponent>;
  const createComponent = createComponentFactory(FullLayoutComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
