import { Component, OnInit, OnDestroy } from '@angular/core';
import { SlabBilgisi } from '@euys/api-interfaces';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kk8115Facade } from '../../+state/kk-8115.facade';

@Component({
  selector: 'euys-slab-bilgisi-dialog',
  templateUrl: './slab-bilgisi-dialog.component.html',
  styleUrls: ['./slab-bilgisi-dialog.component.scss'],
})
export class SlabBilgisiDialogComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean>;
  slabBilgisi$: Observable<SlabBilgisi[]>;
  _endSubscription = new Subject<boolean>();

  constructor(
    private facade: Kk8115Facade,
    public config: DynamicDialogConfig
  ) {
    this.loading$ = this.facade.slabBilgisiLoaded$.pipe(map(loaded => !loaded));
    this.slabBilgisi$ = this.facade.slabBilgisi$.pipe(
      map(slabBilgisi => [slabBilgisi])
    );
  }

  ngOnInit() {
    this.facade.getSlabBilgisi('332', this.config.data);
  }
  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }
}
