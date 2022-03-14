import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { AppDataResourcesService } from './app-data-resources.service';

describe('AppDataResourcesService', () => {
  let spectator: SpectatorService<AppDataResourcesService>;
  const createService = createServiceFactory(AppDataResourcesService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});