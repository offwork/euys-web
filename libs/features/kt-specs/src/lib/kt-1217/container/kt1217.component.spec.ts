import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { Kt1217Component } from './kt1217.component';

describe('Kt1217Component', () => {
  let spectator: Spectator<Kt1217Component>;
  const createComponent = createComponentFactory(Kt1217Component);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
