import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ColumnData,
  DataGridRecord,
  GridInputChangeModel,
} from '../../../models/data-grid-input.model';

@Component({
  selector: 'euys-katsayi-grid',
  templateUrl: './katsayi-grid.component.html',
  styleUrls: ['./katsayi-grid.component.scss'],
})
export class KatsayiGridComponent {
  @Input() columnsDef: string[];
  @Input() treeList: Observable<string[]>;
  @Input() gridDataSource: Observable<DataGridRecord>;
  @Output() calcPercentage = new EventEmitter<GridInputChangeModel>();

  getColumnKeys(obj = {}) {
    return Object.keys(obj);
  }

  percentageCalc(item: ColumnData, inputValue: string, column: string) {
    if (inputValue) {
      this.calcPercentage.emit({ item, inputValue, column });
    }
  }

  inValidTotal(value: string | number): boolean {
    const total = Number(value);
    return total > 100 || total < 100 || isNaN(total);
  }
}
