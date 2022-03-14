import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { AppConfigService } from './app-config.service';

describe('AppConfigService', () => {
  let spectator: SpectatorService<AppConfigService>;
  const createService = createServiceFactory(AppConfigService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});