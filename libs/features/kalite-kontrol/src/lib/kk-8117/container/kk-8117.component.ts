import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Kk8117Facade } from '../+state/kk-8117.facade';
import { Component, OnInit } from '@angular/core';
import { YuzeyKusurKaydiDialogComponent } from '../../shared/components/yuzey-kusur-kaydi-dialog/yuzey-kusur-kaydi-dialog.component';

@Component({
  selector: 'euys-kk8117',
  templateUrl: './kk-8117.component.html',
})
export class Kk8117Component implements OnInit {
  yuzeyKusurKaydiDialogRef: DynamicDialogRef;
  yuzeyKusurKaydiList$ = this.facade.yuzeyKusurKaydiList$;
  yuzeyKusurKaydiListLoaded$ = this.facade.yuzeyKusurKaydiListLoaded$;
  constructor(
    public facade: Kk8117Facade,
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
