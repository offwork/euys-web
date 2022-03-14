import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {
  BagimsizMesajModel,
  BagimsizNumuneModel,
  HSMBobinModel,
  QCKayitBilgileri,
} from '@euys/api-interfaces';
import { MenuItem, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Kk8139Facade } from '../../../../+state/kk-8139.facade';

@Component({
  selector: 'euys-numune-goruntuleme-second-step',
  templateUrl: './numune-goruntuleme-second-step.component.html',
  styleUrls: ['./numune-goruntuleme-second-step.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class NumuneGoruntulemeSecondStepComponent implements OnInit {
  @Input() preserveState = false;
  @Input() selectedBobinList: HSMBobinModel[];
  @Output() goToPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() refreshBobinList$: EventEmitter<undefined> =
    new EventEmitter<undefined>();

  bagimsizNumuneLoaded$: Observable<boolean>;
  bagimsizNumune$: Observable<BagimsizNumuneModel[]>;

  bagimsizMesajLoaded$: Observable<boolean>;
  bagimsizMesaj$: Observable<BagimsizMesajModel[]>;

  qcKayitBilgileri$: Observable<QCKayitBilgileri>;
  qcKayitBilgileriLoaded$: Observable<boolean>;

  toggleable = false;
  items: MenuItem[];

  constructor(
    private messageService: MessageService,
    private facade: Kk8139Facade
  ) {
    this.bagimsizNumuneLoaded$ = this.facade.bagimsizNumuneLoaded$;
    this.bagimsizNumune$ = this.facade.bagimsizNumune$;

    this.bagimsizMesajLoaded$ = this.facade.bagimsizMesajListLoaded$;
    this.bagimsizMesaj$ = this.facade.bagimsizMesajList$;

    this.items = [
      {
        label: 'Seçenekler',
        items: [
          {
            label: 'Temizle',
            icon: 'pi pi-refresh',
            command: () => {
              this.temizle();
            },
          },
        ],
      },
    ];
  }

  ngOnInit(): void {
    if (!this.preserveState) {
      this.facade.getBagimsizNumune('331', this.selectedBobinList[0].bobinNo);
      this.facade.getBagimsizMesajList(this.selectedBobinList[0].bobinNo);
      this.facade.getQcKayitBilgileri({
        bobinNo: this.selectedBobinList[0].bobinNo,
        hatNo: '331',
        qcOnayYapilmis: false,
      });
    }
  }

  temizle() {
    console.log('temizle');
  }

  goToFirstPage() {
    this.goToPage.emit(0);
    this.facade.resetQcKayitBilgileri();
    this.refreshBobinList$.emit(undefined);
  }

  goToThirdPage() {
    this.goToPage.emit(2);
  }

  updateHandler($event: BagimsizNumuneModel) {
    this.facade.updateBagimsizNumuneListState([$event]);
  }
}
