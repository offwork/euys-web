import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { ImagePreviewDialogConfig } from '../impl/image';
import { ImagePreviewOverlayRef } from '../impl/image-preview-overlay-ref';
import { IMAGE_PREVIEW_DIALOG_DATA } from '../tokens/image-priview-overlay.token';

@Injectable()
export class ImagePreviewService {
  constructor(private injector: Injector, private overlay: Overlay) {}

  /**
   * Open a custom component in an overlay
   */
  open<T>(
    component: ComponentType<T>,
    config?: ImagePreviewDialogConfig
  ): ImagePreviewOverlayRef {
    console.log('OPEN: ', config);
    // Globally centered position strategy
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay-panel',
    });

    // Create dialogRef to return
    const dialogRef = new ImagePreviewOverlayRef(overlayRef);

    // Create injector to be able to reference the DialogRef from within the component
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: ImagePreviewOverlayRef, useValue: dialogRef },
        { provide: IMAGE_PREVIEW_DIALOG_DATA, useValue: config?.image },
      ],
    });

    // Attach component portal to the overlay
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);

    return dialogRef;
  }
}
