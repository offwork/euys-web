import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { UretimPlanlamaFeatureShellComponent } from './uretim-planlama-feature-shell.component';

describe('UretimPlanlamaFeatureShellComponent', () => {
  let spectator: Spectator<UretimPlanlamaFeatureShellComponent>;
  const createComponent = createComponentFactory(UretimPlanlamaFeatureShellComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
