import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator/jest';

import { AppProfileDirective } from './app-profile.directive';

describe('AppProfileDirective ', () => {
  let spectator: SpectatorDirective<AppProfileDirective>;
  const createDirective = createDirectiveFactory(AppProfileDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div highlight>Testing AppProfileDirective</div>`);

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
