import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { HttpProviderService } from './http-provider.service';

describe('HttpProviderService', () => {
  let spectator: SpectatorService<HttpProviderService>;
  const createService = createServiceFactory(HttpProviderService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});