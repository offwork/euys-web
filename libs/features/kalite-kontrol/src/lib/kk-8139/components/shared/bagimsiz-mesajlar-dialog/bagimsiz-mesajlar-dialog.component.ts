import { Component, OnInit } from '@angular/core';
import { BagimsizMesajModel } from '@euys/api-interfaces';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Kk8139Facade } from '../../../+state/kk-8139.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-bagimsiz-mesajlar-dialog',
  templateUrl: './bagimsiz-mesajlar-dialog.component.html',
})
export class BagimsizMesajlarDialogComponent implements OnInit {
  formConfiguration: DynamicDialogConfig;
  bagimsizMesajLoaded$: Observable<boolean>;
  bagimsizMesaj$: Observable<BagimsizMesajModel[]>;

  constructor(
    private facade: Kk8139Facade,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {
    this.bagimsizMesaj$ = this.facade.bagimsizMesajList$;
    this.bagimsizMesajLoaded$ = this.facade.bagimsizMesajListLoaded$;
  }

  ngOnInit() {
    this.facade.getBagimsizMesajList(this.config.data.bobinNo);
  }
}
