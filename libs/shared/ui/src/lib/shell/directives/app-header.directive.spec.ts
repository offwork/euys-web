import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator/jest';

import { AppHeaderDirective } from './app-header.directive';

describe('AppHeaderDirective ', () => {
  let spectator: SpectatorDirective<AppHeaderDirective>;
  const createDirective = createDirectiveFactory(AppHeaderDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div highlight>Testing AppHeaderDirective</div>`);

    spectator.dispatchMouseEvent(spectator.element, 'mouseover');

    expect(spectator.element).toHaveStyle({
      backgroundColor: 'rgba(0,0,0, 0.1)'
    });

    spectator.dispatchMouseEvent(spectator.element, 'mouseout');
    expect(spectator.element).toHaveStyle({
      backgroundColor: '#fff'
    });
  });

});
