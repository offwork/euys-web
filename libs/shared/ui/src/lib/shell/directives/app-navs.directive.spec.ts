import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator/jest';

import { AppNavsDirective } from './app-navs.directive';

describe('AppNavsDirective ', () => {
  let spectator: SpectatorDirective<AppNavsDirective>;
  const createDirective = createDirectiveFactory(AppNavsDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div highlight>Testing AppNavsDirective</div>`);

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
