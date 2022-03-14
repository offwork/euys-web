import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { DropdownInputComponent } from './dropdown-input.component';

describe('DropdownInputComponent', () => {
  let spectator: Spectator<DropdownInputComponent>;
  const createComponent = createComponentFactory(DropdownInputComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
