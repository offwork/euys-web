import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { InputtextComponent } from './inputtext.component';

describe('InputtextComponent', () => {
  let spectator: Spectator<InputtextComponent>;
  const createComponent = createComponentFactory(InputtextComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
