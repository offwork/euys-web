import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { AppAuthService } from './app-auth.service';

describe('AppAuthService', () => {
  let spectator: SpectatorService<AppAuthService>;
  const createService = createServiceFactory(AppAuthService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});