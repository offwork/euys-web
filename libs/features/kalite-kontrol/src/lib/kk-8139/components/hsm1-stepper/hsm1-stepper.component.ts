import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { BagimsizNumuneBilgileriQueryModel } from '@euys/api-interfaces';
import { HSMBobinModel } from '@euys/api-interfaces';
import { Kk8139Facade } from '../../+state/kk-8139.facade';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-hsm1-stepper',
  templateUrl: './hsm1-stepper.component.html',
  styleUrls: ['./hsm1-stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Hsm1StepperComponent implements OnInit {
  @Input() hsmBobinList$: Observable<HSMBobinModel[]>;
  @Input() hsmBobinListLoaded$: Observable<boolean>;
  @Output() refreshBobinList$: EventEmitter<undefined> =
    new EventEmitter<undefined>();

  bagimsizNumuneBilgileriPageParams: BagimsizNumuneBilgileriQueryModel;
  hsm1Steps: MenuItem[];
  activePage = 0;
  preserveState = false;
  selectedBobinList: HSMBobinModel[] = [];

  constructor(private facade: Kk8139Facade) {}

  ngOnInit() {
    this.hsm1Steps = [
      { label: 'HSM1 QC listesi' },
      { label: 'Bağımsız numune görüntüleme' },
      { label: 'HSM1 QC kayıt' },
      { label: 'Yüzey kusur kaydı' },
      { label: 'HSM1 QC kayıt onay' },
    ];
  }

  goToPage($event: number) {
    const pageIndex: number = $event;
    if (this.activePage === 0 && !this.isNext(pageIndex)) {
      this.facade.resetBagimsizNumune();
    } else if (this.activePage === 0 && this.isNext(pageIndex)) {
      this.preserveState = false;
    }
    this.activePage = $event;
  }

  isNext(pageIndex: number) {
    return pageIndex > this.activePage;
  }

  preserveStateHandler($event: boolean) {
    this.preserveState = $event;
  }

  refreshBobinListHandler() {
    this.refreshBobinList$.emit(undefined);
  }

  selectionChangeEventHandler($event: HSMBobinModel[]) {
    this.selectedBobinList = $event;
  }
}
