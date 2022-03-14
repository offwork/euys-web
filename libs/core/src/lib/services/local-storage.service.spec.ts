import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let spectator: SpectatorService<LocalStorageService>;
  const createService = createServiceFactory(LocalStorageService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});