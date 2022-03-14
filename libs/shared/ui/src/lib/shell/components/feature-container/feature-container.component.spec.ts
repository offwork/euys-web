import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { FeatureContainerComponent } from './feature-container.component';

describe('FeatureContainerComponent', () => {
  let spectator: Spectator<FeatureContainerComponent>;
  const createComponent = createComponentFactory(FeatureContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
