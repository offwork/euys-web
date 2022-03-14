import { Component, Input } from '@angular/core';
import { BagimsizMesajModel } from '@euys/api-interfaces';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-bagimsiz-mesajlar-list',
  templateUrl: './bagimsiz-mesajlar-list.component.html',
  styleUrls: ['./bagimsiz-mesajlar-list.component.scss'],
})
export class BagimsizMesajlarListComponent {
  @Input() ref: DynamicDialogRef;
  @Input() formConfiguration: DynamicDialogConfig;
  @Input() bagimsizMesajLoaded$: Observable<boolean>;
  @Input() bagimsizMesaj$: Observable<BagimsizMesajModel[]>;

  @Input() showHeader = true;
  dummyList = new Array(2);
}
