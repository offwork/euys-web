import { Component, OnInit } from '@angular/core';
import { BagimsizNumuneModel } from '@euys/api-interfaces';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { Kk8139Facade } from '../../../+state/kk-8139.facade';

@Component({
  selector: 'euys-bagimsiz-numune-dialog',
  templateUrl: './bagimsiz-numune-dialog.component.html',
  styleUrls: ['./bagimsiz-numune-dialog.component.scss'],
})
export class BagimsizNumuneDialogComponent implements OnInit {
  formConfiguration: DynamicDialogConfig;
  bagimsizNumuneLoaded$: Observable<boolean>;
  bagimsizNumune$: Observable<BagimsizNumuneModel[]>;

  constructor(
    private facade: Kk8139Facade,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {
    this.bagimsizNumuneLoaded$ = this.facade.bagimsizNumuneLoaded$;
    this.bagimsizNumune$ = this.facade.bagimsizNumune$;
  }

  ngOnInit() {
    this.facade.getBagimsizNumune('331', this.config.data.bobinNo);
  }
}
