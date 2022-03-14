import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { KtOIUrun } from '@euys/api-interfaces';

import { DataListCol } from '@euys/shared/ui';

@Component({
  selector: 'euys-urun-kodu-list',
  templateUrl: './urun-kodu-list.component.html',
})
export class UrunKoduListComponent implements OnChanges {
  @Input() formConfiguration: DynamicDialogConfig;
  @Input() ref: DynamicDialogRef;

  urunKodlari: KtOIUrun[];
  urunKoduColumns: DataListCol[] = [
    { field: 'urunKodu', header: 'Ürün Kodu' },
    { field: 'rumuz', header: 'Rumuz' },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    const {
      formConfiguration: {
        currentValue: { data },
      },
    } = changes;

    this.urunKodlari = data.content;
  }
}
