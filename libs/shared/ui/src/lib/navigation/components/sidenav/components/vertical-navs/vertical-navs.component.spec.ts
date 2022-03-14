import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { VerticalNavsComponent } from './vertical-navs.component';

describe('VerticalNavsComponent', () => {
  let spectator: Spectator<VerticalNavsComponent>;
  const createComponent = createComponentFactory(VerticalNavsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
