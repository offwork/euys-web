import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { TeeFeaturesComponent } from './tee-features.component';

describe('TeeFeaturesComponent', () => {
  let spectator: Spectator<TeeFeaturesComponent>;
  const createComponent = createComponentFactory(TeeFeaturesComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
