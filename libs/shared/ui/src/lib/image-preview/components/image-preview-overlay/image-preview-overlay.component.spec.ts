import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ImagePreviewOverlayComponent } from './image-preview-overlay.component';

describe('ImagePreviewOverlayComponent', () => {
  let spectator: Spectator<ImagePreviewOverlayComponent>;
  const createComponent = createComponentFactory(ImagePreviewOverlayComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
