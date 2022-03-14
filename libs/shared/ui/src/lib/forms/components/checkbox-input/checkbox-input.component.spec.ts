import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { CheckboxInputComponent } from './checkbox-input.component';

describe('CheckboxInputComponent', () => {
  let spectator: Spectator<CheckboxInputComponent>;
  const createComponent = createComponentFactory(CheckboxInputComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
