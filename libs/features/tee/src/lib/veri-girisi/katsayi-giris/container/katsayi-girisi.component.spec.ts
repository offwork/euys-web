import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { KatsayiGirisiComponent } from './katsayi-girisi.component';

describe('KatsayiGirisiComponent', () => {
  let spectator: Spectator<KatsayiGirisiComponent>;
  const createComponent = createComponentFactory(KatsayiGirisiComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
