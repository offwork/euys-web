import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { ImagePreviewService } from './image-preview.service';

describe('ImagePreviewService', () => {
  let spectator: SpectatorService<ImagePreviewService>;
  const createService = createServiceFactory(ImagePreviewService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});