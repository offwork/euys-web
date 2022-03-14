import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { KtSpYaglamaSpec, KTSPYaglamaViewModel } from '@euys/api-interfaces';
import { Observable, Subject } from 'rxjs';

import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { TableColumnExpanderService } from '@euys/shared/ui';

import { KtOIUrun } from '@euys/api-interfaces';

import { UrunKoduDialogComponent } from '../urun-kodu-dialog/urun-kodu-dialog.component';

import { Kt1359Facade } from '../../+state/kt-1359.facade';

@Component({
  selector: 'euys-yaglama-list',
  templateUrl: './yaglama-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YaglamaListComponent {
  @Input() config$: Observable<KTSPYaglamaViewModel>;
  @Input() configLoaded$: Observable<boolean>;
  @Input() yaglamaList$: Observable<KtSpYaglamaSpec[]>;
  @Input() yaglamaListLoaded$: Observable<boolean>;
  @Output() rowSelect = new EventEmitter<KtSpYaglamaSpec>();
  @Output() rowUnselect = new EventEmitter<KtSpYaglamaSpec>();
  expandDialogOpen = false;
  selected: KtSpYaglamaSpec;

  formRef: DynamicDialogRef;

  _endSubscription = new Subject<boolean>();

  @Input() visionParams: string[] = [];

  constructor(
    private tableColumnService: TableColumnExpanderService,
    public dialogService: DialogService,
    public facade: Kt1359Facade
  ) {}

  onRowSelect(selected: KtSpYaglamaSpec) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpYaglamaSpec) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnData(expandtableContent: KtOIUrun) {
    const selectedPoperColumn = { ...expandtableContent };

    this.facade.urunler$.subscribe(resUrunler => {
      if (resUrunler)
        this.showUrunColumnExpander(
          this.tableColumnService.expandColumnArray(
            selectedPoperColumn,
            resUrunler
          )
        );
    });
  }

  expandColumnDataHandler(expandtableContent: KtOIUrun) {
    this.expandColumnData(expandtableContent);
  }

  showUrunColumnExpander(urunKodlari: KtOIUrun[]) {
    this.formRef = this.dialogService.open(UrunKoduDialogComponent, {
      data: {
        content: urunKodlari,
      },
      header: 'Ürün Kodu',
      width: '70%',
    });
    this.formRef.onClose.subscribe(ktOiUrun => {
      console.log('Ref close event call ==> ', ktOiUrun);
    });
  }
}
