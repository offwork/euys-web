import { Component, OnDestroy, OnInit } from '@angular/core';
import { KabaHaddelemePasoModel } from '@euys/api-interfaces';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'euys-kaba-haddeleme-dialog',
  templateUrl: './kaba-haddeleme-dialog.component.html',
  styleUrls: ['./kaba-haddeleme-dialog-component.scss'],
})
export class KabaHaddelemePasoDialogComponent implements OnDestroy {
  loading$: Observable<boolean>;
  kabaHaddelemeBilgisi$: Observable<KabaHaddelemePasoModel>;
  _endSubscription = new Subject<boolean>();

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.loading$ = this.config.data.kabaHaddelemePasoLoaded$.pipe(
      map(loaded => !loaded)
    );
    this.kabaHaddelemeBilgisi$ = this.config.data.kabaHaddelemeBilgisi$;
  }
  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }
}
