/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GridInputChangeModel,
  SimpleColumnData,
  SimpleDataGridRecord,
} from '../../../models/data-grid-input.model';

@Component({
  selector: 'euys-ksy-firinlar-standart-hiz-grid',
  templateUrl: './ksy-firinlar-standart-hiz-grid.component.html',
  styleUrls: ['./ksy-firinlar-standart-hiz-grid.component.scss'],
})
export class KsyFirinlarStandartHizGridComponent {
  @Input() columnsDef: string[];
  @Input() gridDataSource: Observable<SimpleDataGridRecord>;
  @Output() inputBlurred = new EventEmitter<GridInputChangeModel>();

  blurListener(item: SimpleColumnData, inputValue: string, column: string) {
    this.inputBlurred.emit({ item, inputValue, column });
  }
}
