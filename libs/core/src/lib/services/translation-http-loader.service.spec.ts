import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { TranslationHttpLoaderService } from './translation-http-loader.service';

describe('TranslationHttpLoaderService', () => {
  let spectator: SpectatorService<TranslationHttpLoaderService>;
  const createService = createServiceFactory(TranslationHttpLoaderService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});