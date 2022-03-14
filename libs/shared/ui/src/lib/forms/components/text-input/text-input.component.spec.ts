import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { TextInputComponent } from './text-input.component';

describe('TextInputComponent', () => {
  let spectator: Spectator<TextInputComponent>;
  const createComponent = createComponentFactory(TextInputComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
