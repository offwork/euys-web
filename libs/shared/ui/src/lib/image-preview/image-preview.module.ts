import { Overlay } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ConfirmClickModule } from '../confirm-click/confirm-click.module';
import { DesignSystemModule } from '../design-system/design-system.module';
import { PipesModule } from '../pipes/pipes.module';
import { ImagePreviewOverlayComponent } from './components/image-preview-overlay/image-preview-overlay.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { ImagePreviewService } from './services/image-preview.service';

@NgModule({
  declarations: [ImagePreviewComponent, ImagePreviewOverlayComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PipesModule,
    DesignSystemModule,
    ConfirmClickModule,
  ],
  exports: [ImagePreviewComponent, ImagePreviewOverlayComponent],
  providers: [ImagePreviewService, { provide: Overlay, useClass: Overlay }],
})
export class ImagePreviewModule {}
