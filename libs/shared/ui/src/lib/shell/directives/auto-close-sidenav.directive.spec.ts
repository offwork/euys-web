import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator/jest';

import { AutoCloseSidenavDirective } from './auto-close-sidenav.directive';

describe('AutoCloseSidenavDirective ', () => {
  let spectator: SpectatorDirective<AutoCloseSidenavDirective>;
  const createDirective = createDirectiveFactory(AutoCloseSidenavDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div highlight>Testing AutoCloseSidenavDirective</div>`);

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
