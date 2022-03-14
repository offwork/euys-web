import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { range } from '@euys/shared/utility';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { DataTableGecikme } from '../../models/data-table-gecikme.models';

export class TableDataSource extends DataSource<DataTableGecikme> {
  _data = new BehaviorSubject<DataTableGecikme[]>([]);

  set data(value: DataTableGecikme[]) {
    this._data.next(value);
  }

  connect(): Observable<readonly DataTableGecikme[]> {
    return this._data.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer) {
    if (!collectionViewer) {
      throw new Error('Method not implemented.');
    }
  }
}

@Component({
  selector: 'euys-data-table-gecikme',
  templateUrl: './gecikme-table.component.html',
  styleUrls: ['./gecikme-table.component.scss'],
})
export class GecikmeTableComponent implements OnInit, OnDestroy {
  @Input() data: Observable<DataTableGecikme[]>;
  @Input() header: string;
  @Input() horizontalScroll = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource = new TableDataSource();
  dataSource$: Subscription;

  ngOnInit() {
    this.dataSource$ = this.data
      .pipe(
        tap(data => {
          const maxAylikSize = Math.max(...data.map(i => i.gecikmeler.length));

          this.dataSource.data = range(0, maxAylikSize - 1).map(rowNum => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let elem = {} as any;
            data.forEach((gecikme, index) => {
              elem = {
                ...elem,
                ['durusNedeni-' + index]:
                  gecikme.gecikmeler[rowNum]?.durusNedeni,
                ['saat-' + index]: gecikme.gecikmeler[rowNum]?.saat,
              };
            });
            return elem;
          });
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.dataSource$.unsubscribe();
  }

  headerColumns1(data: DataTableGecikme[]) {
    const columns = ['sira'];
    data.forEach((_, i) => {
      columns.push('baslik-' + i);
    });
    return columns;
  }

  headerColumns2(data: DataTableGecikme[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const columns: any[] = [];
    data.forEach((_, i) => {
      columns.push('durusNedeni-' + i);
      columns.push('saat-' + i);
    });
    return columns;
  }

  rowColumns(data: DataTableGecikme[]) {
    const columns = ['sira'];
    data.forEach((_, i) => {
      columns.push('durusNedeni-' + i);
      columns.push('saat-' + i);
    });
    return columns;
  }
}
