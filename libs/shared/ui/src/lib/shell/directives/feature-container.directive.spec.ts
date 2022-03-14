import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator/jest';

import { FeatureContainerDirective } from './feature-container.directive';

describe('FeatureContainerDirective ', () => {
  let spectator: SpectatorDirective<FeatureContainerDirective>;
  const createDirective = createDirectiveFactory(FeatureContainerDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div highlight>Testing FeatureContainerDirective</div>`);

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
