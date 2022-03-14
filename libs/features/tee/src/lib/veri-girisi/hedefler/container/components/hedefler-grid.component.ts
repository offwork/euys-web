import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HedefColumn } from '../../+state/hedefler.models';
import { GridInputChangeModel } from '../../../models/data-grid-input.model';

export type HedefDataGridRecord = Record<string, Array<HedefColumn>>;

@Component({
  selector: 'euys-hedefler-grid',
  templateUrl: './hedefler-grid.component.html',
  styleUrls: ['./hedefler-grid.component.scss'],
})
export class HedeflerGridComponent {
  @Input() columnsDef: string[];
  @Input() treeList!: Observable<string[]>;
  @Input() gridDataSource: Observable<HedefDataGridRecord>;
  @Output() calcPercentage = new EventEmitter<GridInputChangeModel>();

  getColumnKeys(obj = {}) {
    return Object.keys(obj);
  }

  percentageCalc(item: HedefColumn, inputValue: string, column: string) {
    if (inputValue) {
      this.calcPercentage.emit({ item, inputValue, column });
    }
  }

  inValidTotal(value: string | number): boolean {
    const total = Number(value);
    return total > 100 || isNaN(total);
  }
}
