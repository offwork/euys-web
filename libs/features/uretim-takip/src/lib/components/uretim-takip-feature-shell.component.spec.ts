import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { UretimTakipFeatureShellComponent } from './uretim-takip-feature-shell.component';

describe('UretimTakipFeatureShellComponent', () => {
  let spectator: Spectator<UretimTakipFeatureShellComponent>;
  const createComponent = createComponentFactory(UretimTakipFeatureShellComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
