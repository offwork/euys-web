import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { SessionStorageService } from './session-storage.service';

describe('SessionStorageService', () => {
  let spectator: SpectatorService<SessionStorageService>;
  const createService = createServiceFactory(SessionStorageService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});