import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { Kt1218Component } from './kt1218.component';

describe('Kt1218Component', () => {
  let spectator: Spectator<Kt1218Component>;
  const createComponent = createComponentFactory(Kt1218Component);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
