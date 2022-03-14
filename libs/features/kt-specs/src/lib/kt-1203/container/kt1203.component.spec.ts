import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { Kt1203Component } from './kt1203.component';

describe('Kt1203Component', () => {
  let spectator: Spectator<Kt1203Component>;
  const createComponent = createComponentFactory(Kt1203Component);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
