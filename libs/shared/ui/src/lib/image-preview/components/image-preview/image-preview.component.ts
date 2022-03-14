/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Subject } from 'rxjs';
import { Image } from '../../impl/image';
import { ImagePreviewService } from '../../services/image-preview.service';
import { ImagePreviewOverlayComponent } from '../image-preview-overlay/image-preview-overlay.component';

@Component({
  selector: 'euys-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'image-preview' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePreviewComponent {
  @Input() images!: Image[];
  // TODO: imageList must be `generic` type for an image to be displayed
  @Input() imageList!: any[];
  @Input() displayeName!: string;
  @Input() set originalSource(value: string) {
    //console.log(value);
    if (value) {
      const dialogRef = this.imagePreviewService.open(
        ImagePreviewOverlayComponent,
        { image: value }
      );
      dialogRef.afterClosed().subscribe(() => {
        // Subscription runs after the dialog closes
        console.log('Dialog closed!');
      });
    }
  }
  @Output() clickOnThumb = new Subject<string>();
  @Output() deleteThumb = new Subject<any>();

  constructor(private imagePreviewService: ImagePreviewService) {}

  onClick(image: any) {
    this.clickOnThumb.next(image['idDokuman']);
  }
}
