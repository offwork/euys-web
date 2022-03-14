import { Component, Inject } from '@angular/core';
import { ImagePreviewOverlayRef } from '../../impl/image-preview-overlay-ref';
import { IMAGE_PREVIEW_DIALOG_DATA } from '../../tokens/image-priview-overlay.token';

@Component({
  selector: 'euys-image-preview-overlay',
  templateUrl: './image-preview-overlay.component.html',
  styleUrls: ['./image-preview-overlay.component.scss'],
})
export class ImagePreviewOverlayComponent {
  constructor(
    public dialogRef: ImagePreviewOverlayRef,
    @Inject(IMAGE_PREVIEW_DIALOG_DATA) public image: string
  ) {}

  close() {
    this.dialogRef.close();
  }
}
