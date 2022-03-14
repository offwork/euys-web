import { Component, OnInit } from '@angular/core';
import { Kk8141Facade } from '../+state/kk-8141.facade';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { YuzeyKusurKaydiDialogComponent } from '../../shared/components/yuzey-kusur-kaydi-dialog/yuzey-kusur-kaydi-dialog.component';

@Component({
  selector: 'euys-kk8141',
  templateUrl: './kk-8141.component.html',
})
export class Kk8141Component implements OnInit {
  yuzeyKusurKaydiDialogRef: DynamicDialogRef;
  yuzeyKusurKaydiList$ = this.facade.yuzeyKusurKaydiList$;
  yuzeyKusurKaydiListLoaded$ = this.facade.yuzeyKusurKaydiListLoaded$;

  constructor(
    public facade: Kk8141Facade,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.facade.init();
  }

  openYuzeyKusurKaydi() {
    this.facade.getYuzeyKusurKaydi('C2110000010000');
    this.dialogService.open(YuzeyKusurKaydiDialogComponent, {
      data: {
        yuzeyKusurKaydiList$: this.yuzeyKusurKaydiList$,
        yuzeyKusurKaydiListLoaded$: this.yuzeyKusurKaydiListLoaded$,
      },
    });
  }
}
