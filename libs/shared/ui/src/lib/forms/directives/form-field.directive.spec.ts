import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator/jest';

import { FormFieldDirective } from './form-field.directive';

describe('FormFieldDirective ', () => {
  let spectator: SpectatorDirective<FormFieldDirective>;
  const createDirective = createDirectiveFactory(FormFieldDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div highlight>Testing FormFieldDirective</div>`);

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
