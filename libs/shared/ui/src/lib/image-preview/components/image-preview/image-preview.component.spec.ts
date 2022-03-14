import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ImagePreviewComponent } from './image-preview.component';

describe('ImagePreviewOverlayComponent', () => {
  let spectator: Spectator<ImagePreviewComponent>;
  const createComponent = createComponentFactory(ImagePreviewComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
