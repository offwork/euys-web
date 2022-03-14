import { KkUretimYuzeyKusuru } from '@euys/api-interfaces';
import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-yuzey-kusur-kaydi-list',
  templateUrl: './yuzey-kusur-kaydi-list.component.html',
})
export class YuzeyKusurKaydiListComponent implements OnChanges {
  @Input() formConfiguration: DynamicDialogConfig;
  @Input() ref: DynamicDialogRef;

  @Input()
  yuzeyKusurKaydiList$: Observable<KkUretimYuzeyKusuru[]>;
  loading$: Observable<boolean>;

  ngOnChanges(changes: SimpleChanges): void {
    const {
      formConfiguration: {
        currentValue: { data },
      },
    } = changes;

    this.yuzeyKusurKaydiList$ = data.content;
  }
}
