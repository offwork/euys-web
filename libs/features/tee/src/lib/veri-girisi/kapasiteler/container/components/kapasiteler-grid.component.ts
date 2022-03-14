/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GridInputChangeModel,
  SimpleColumnData,
  SimpleDataGridRecord,
} from '../../../models/data-grid-input.model';

@Component({
  selector: 'euys-kapasiteler-grid',
  templateUrl: './kapasiteler-grid.component.html',
  styleUrls: ['./kapasiteler-grid.component.scss'],
})
export class KapasitelerGridComponent {
  @Input() columnsDef: string[];
  @Input() gridDataSource: Observable<SimpleDataGridRecord>;
  @Output() inputBlurred = new EventEmitter<GridInputChangeModel>();

  blurListener(item: SimpleColumnData, inputValue: string, column: string) {
    this.inputBlurred.emit({ item, inputValue, column });
  }
}
