import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  BagimsizMesajModel,
  EvetHayir,
  HSMBobinModel,
  YerliIhrac,
} from '@euys/api-interfaces';
import { Kk8139Facade } from '../../../+state/kk-8139.facade';
import { BagimsizMesajlarDialogComponent } from '../bagimsiz-mesajlar-dialog/bagimsiz-mesajlar-dialog.component';
import { BagimsizNumuneDialogComponent } from '../bagimsiz-numune-dialog/bagimsiz-numune-dialog.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'euys-hsm-bobin-list',
  templateUrl: './hsm-bobin-list.component.html',
  styleUrls: ['./hsm-bobin-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HSMBobinListComponent {
  @Output() selectionChangeEventEmitter$ = new EventEmitter<HSMBobinModel[]>();

  @Input() hsmBobinList$: Observable<HSMBobinModel[]>;
  @Input() hsmBobinListLoaded$: Observable<boolean>;

  dummyList: BagimsizMesajModel[] = new Array(5);
  bagimsizMesajDialogRef: DynamicDialogRef;
  bagimsizMesajNumuneRef: DynamicDialogRef;
  bagimsizMesajList$: Observable<BagimsizMesajModel[]>;

  topluKayitOptions = [EvetHayir.EVET, EvetHayir.HAYIR];
  yerliIhracOptions = [YerliIhrac.YERLI, YerliIhrac.IHRAC];

  selected: HSMBobinModel[] = [];

  constructor(
    private dialogService: DialogService,
    private facade: Kk8139Facade
  ) {}

  onSelectUnselect(): void {
    this.selectionChangeEventEmitter$.emit(this.selected);
  }

  /*
   *
   * Dialog functions
   *
   */

  expandBagimsizMesajDialog(bobinNo: string) {
    this.bagimsizMesajDialogRef = this.dialogService.open(
      BagimsizMesajlarDialogComponent,
      {
        header: 'Bağimsiz Notlar',
        width: '80vw',
        modal: true,
        data: {
          bobinNo,
        },
      }
    );

    this.bagimsizMesajDialogRef.onClose.subscribe(() => {
      this.facade.resetBagimsizMesajList();
    });
  }

  expandBagimsizNumuneDialog(bobinNo: string): void {
    const bagimsizNumuneDialogRef = this.dialogService.open(
      BagimsizNumuneDialogComponent,
      {
        header: 'Bağımsız Numuneler',
        width: '80vw',
        modal: true,
        data: {
          bobinNo,
        },
      }
    );

    bagimsizNumuneDialogRef.onClose.subscribe(() => {
      this.facade.resetBagimsizNumune();
    });
  }
}
