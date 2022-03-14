import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { DateInputComponent } from './date-input.component';

describe('DateInputComponent', () => {
  let spectator: Spectator<DateInputComponent>;
  const createComponent = createComponentFactory(DateInputComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
