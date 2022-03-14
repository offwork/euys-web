import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Line } from '@euys/api-interfaces';
import { FormControl } from '@ngneat/reactive-forms';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { LineSpeedsFacade } from '../+state/line-speeds.facade';

@Component({
  selector: 'euys-line-speeds',
  templateUrl: './line-speeds.component.html',
  styleUrls: ['./line-speeds.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'euys-line-speeds' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineSpeedsComponent implements OnInit, OnDestroy {
  productLines$: Observable<Array<Line>>;
  downloaded$: Observable<boolean>;
  selectedLine = new FormControl<Line>();
  isUpload$: Observable<boolean>;
  line: string;
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

  constructor(private facade: LineSpeedsFacade) {
    this.isUpload$ = this.facade.loaded$;
    this.productLines$ = this.facade.lines$;
    this.productLines$ = this.facade.lines$;
    this.downloaded$ = this.facade.downloaded$;
  }

  filesDownloadHandler() {
    this.facade.downloadFile(this.line);
  }

  uploadHandler(event: DataTransfer) {
    const file = event.files[0];
    this.facade.uploadFile(file, this.line);
  }

  ngOnInit() {
    this.facade.loadLines();

    this.selectedLine.value$
      .pipe(filter<Line>(Boolean), takeUntil(this._endSubscription$))
      .subscribe(source => {
        this.line = source.hatKisaAdi;
      });
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }
}
