import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator/jest';

import { OverrideErrorPipe } from './override-error.pipe';

describe('OverrideErrorPipe ', () => {
  let spectator: SpectatorPipe<OverrideErrorPipe>;
  const createPipe = createPipeFactory(OverrideErrorPipe);

  it('should change the background color', () => {
    spectator = createPipe(`<div>{{ 'Testing' | overrideError }}</div>`);

    expect(spectator.element).toHaveText('Testing');
  });
});
