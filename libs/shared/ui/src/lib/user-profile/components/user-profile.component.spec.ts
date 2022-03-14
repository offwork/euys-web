import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let spectator: Spectator<UserProfileComponent>;
  const createComponent = createComponentFactory(UserProfileComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
