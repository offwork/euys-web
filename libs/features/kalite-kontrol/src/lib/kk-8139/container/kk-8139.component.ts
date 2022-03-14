import { Component, OnInit } from '@angular/core';
import { QcBobinListQueryModel } from '@euys/api-interfaces';
import { MessageService } from 'primeng/api';
import { Kk8139Facade } from '../+state/kk-8139.facade';

@Component({
  selector: 'euys-kk8139',
  templateUrl: './kk-8139.component.html',
  providers: [MessageService],
})
export class Kk8139Component implements OnInit {
  cmPratigiList$ = this.facade.cmPratigiList$;
  smPratigiList$ = this.facade.smPratigiList$;

  hsmBobinList$ = this.facade.hsmBobinList$;
  hsmBobinListLoaded$ = this.facade.hsmBobinListLoaded$;

  bobinListQueryParams: QcBobinListQueryModel;

  yuzeyKusurKaydiList$ = this.facade.yuzeyKusurKaydiList$;
  yuzeyKusurKaydiListLoaded$ = this.facade.yuzeyKusurKaydiListLoaded$;

  defaultYuzeyKusurKodu$ = this.facade.defaultYuzeyKusurKodu$;

  constructor(
    public facade: Kk8139Facade,
    private messageService: MessageService
  ) {
    this.bobinListQueryParams = {
      hatNo: 331,
      qcOnayYapilmis: false,
    };
  }

  ngOnInit(): void {
    this.facade.init(this.bobinListQueryParams);
  }

  openYuzeyKusurKaydi() {
    this.yuzeyKusurKaydiList$.subscribe();
  }

  refreshBobinListHandler() {
    this.facade.resetBobinList();
    this.facade.init(this.bobinListQueryParams);
  }
}
