import { Component, Input, OnInit } from '@angular/core';
import { KkUretimYuzeyKusuru } from '@euys/api-interfaces';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-yuzey-kusur-kaydi-dialog',
  templateUrl: './yuzey-kusur-kaydi-dialog.component.html',
})
export class YuzeyKusurKaydiDialogComponent implements OnInit {
  formConfiguration: DynamicDialogConfig;

  yuzeyKusurKaydiList$: Observable<KkUretimYuzeyKusuru[]>;
  yuzeyKusurKaydiListLoaded$: Observable<boolean>;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.yuzeyKusurKaydiList$ = this.config.data.yuzeyKusurKaydiList$;
    this.yuzeyKusurKaydiListLoaded$ =
      this.config.data.yuzeyKusurKaydiListLoaded$;
  }

  ngOnInit(): void {
    this.formConfiguration = this.config;
  }
}
