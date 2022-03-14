import { Injectable } from '@angular/core';
import { KtOIUrun, KtSpYaglamaSpec } from '@euys/api-interfaces';
import { Observable } from 'rxjs';
import { TableColumnExpanderService } from './table-column.service';

@Injectable()
export class FilteringAlgorithmsService {
  urunKoduFilteringReady = false;
  filteredUrunKoduColumns: KtOIUrun[];

  constructor(private tableColumnExpanderService: TableColumnExpanderService) {
    this.urunKoduFilteringReady = false;
  }

  findDistinctKTOIUrunRecords(
    ktSpecsList: KtSpYaglamaSpec[],
    ktOIUrunList: KtOIUrun[]
  ): KtOIUrun[][] {
    return ktSpecsList.map((spec: KtSpYaglamaSpec) =>
      this.tableColumnExpanderService
        .expandColumnStringArray(spec.urunKodlari, ktOIUrunList)
        .map((expandedColumn: KtOIUrun) => {
          const tempObj: KtOIUrun = {
            urunKodu: expandedColumn.urunKodu,
            rumuz: expandedColumn.rumuz,
          };
          return tempObj;
        })
    );
  }

  createFilteringKTOIUrunArray(
    urunlerFacade: Observable<KtOIUrun[]>,
    yaglamaListFacade: Observable<KtSpYaglamaSpec[]>
  ) {
    urunlerFacade.pipe().subscribe(resUrunler => {
      yaglamaListFacade.pipe().subscribe(yaglamaList => {
        this.findDistinctKTOIUrunRecords(yaglamaList, resUrunler).forEach(
          urunArray => {
            if (
              this.filteredUrunKoduColumns &&
              this.filteredUrunKoduColumns.length > 0
            )
              this.filteredUrunKoduColumns.push(...urunArray);
          }
        );
        this.urunKoduFilteringReady = true;
      });
    });
  }

  isFilteringReady(): boolean {
    return this.urunKoduFilteringReady;
  }

  getFilteringKTOIUrunArray() {
    if (this.filteredUrunKoduColumns && this.filteredUrunKoduColumns.length > 0)
      return [...this.filteredUrunKoduColumns];
    return [];
  }
}
