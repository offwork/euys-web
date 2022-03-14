import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator/jest';

import { SelectOptionsPipe } from './select-options.pipe';

describe('SelectOptionsPipe ', () => {
  let spectator: SpectatorPipe<SelectOptionsPipe>;
  const createPipe = createPipeFactory(SelectOptionsPipe);

  it('should change the background color', () => {
    spectator = createPipe(`<div>{{ 'Testing' | selectOptions }}</div>`);

    expect(spectator.element).toHaveText('Testing');
  });
});
