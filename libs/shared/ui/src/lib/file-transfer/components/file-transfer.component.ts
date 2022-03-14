import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ProgressBar } from 'primeng/progressbar';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Download } from '../impl/download';
import { FileTransferService } from '../services/file-transfer.service';

@Component({
  selector: 'euys-file-transfer',
  templateUrl: './file-transfer.component.html',
  styleUrls: ['./file-transfer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileTransferComponent implements OnInit, OnDestroy {
  // TODO: check progress bar value
  @ViewChild(ProgressBar) progressbar: ProgressBar;

  @Input() resourceUrl!: string;
  @Input() fileListPath!: string;
  @Input() downloadPath = 'download';
  @Input() uploadPath = 'upload';

  _fileList = new BehaviorSubject<Array<Record<string, unknown>>>(null);
  fileList$: Observable<Array<Record<string, unknown>>>;
  download$: Observable<Download>;

  _endSubscription$ = new Subject<boolean>();

  acceptExtensions = [
    '.png',
    '.jpg',
    '.jpeg',
    '.xlsx',
    '.pdf',
    '.doc',
    '.docx',
    '.xml',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ].join(',');

  constructor(private fileTransferService: FileTransferService) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  uploadHandler(event: any) {
    const formData = new FormData();
    formData.append('file', event['files'][0]);
    // Note that it runs as a promise because nested subscripts are avoided.
    this.fileTransferService
      .uploadFile(formData, `${this.resourceUrl}/${this.uploadPath}`)
      .then(data => {
        // eslint-disable-next-line no-restricted-syntax
        console.info('Upload Response: ', data);
        this.fileList$ = this.fileTransferService.getAllFiles(
          `${this.resourceUrl}/${this.fileListPath}`
        );
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick(file: any) {
    this.download$ = this.fileTransferService.downloadFile(
      file.name,
      `${this.resourceUrl}/${this.downloadPath}/`
    );
  }

  ngOnInit() {
    this.fileList$ = this.fileTransferService.getAllFiles(
      `${this.resourceUrl}/${this.fileListPath}`
    );
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }
}
