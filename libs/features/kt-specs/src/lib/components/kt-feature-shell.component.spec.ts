import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { KtFeatureShellComponent } from './kt-feature-shell.component';

describe('KtFeatureShellComponent', () => {
  let spectator: Spectator<KtFeatureShellComponent>;
  const createComponent = createComponentFactory(KtFeatureShellComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
