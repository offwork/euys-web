import { Component, OnInit } from '@angular/core';
import { KkOperatorBilgiGörseller } from '@euys/api-interfaces';
import { Kk8103Facade } from '../+state/kk-8103.facade';
import { GenericGorselUploadEvent } from '../../shared/ana-veri/interfaces/generic-gorsel-upload-event';
import { OperatorGorselRemoveEvent } from '../../shared/ana-veri/interfaces/operator-gorsel-remove-event';

@Component({
  selector: 'euys-kk8103',
  templateUrl: './kk-8103.component.html',
})
export class Kk8103Component implements OnInit {
  oprBilgiKayit$ = this.facade.oprBilgiKayit$;
  oprBilgiKayitLoaded$ = this.facade.oprBilgiKayitLoaded$;

  musteriList$ = this.facade.musteriList$;
  musteriListLoaded$ = this.facade.musteriListLoaded$;

  urunList$ = this.facade.urunList$;
  urunListLoaded$ = this.facade.urunListLoaded$;

  kaliteList$ = this.facade.kaliteList$;
  kaliteListLoaded$ = this.facade.kaliteListLoaded$;

  oprGorselList$ = this.facade.oprBilgiGorselList$;
  oprGorselListLoaded$ = this.facade.oprBilgiGorselListLoaded$;

  constructor(public facade: Kk8103Facade) {}

  ngOnInit(): void {
    this.facade.init();
  }

  onResetGorselList() {
    this.facade.resetOprBilgiGorselList();
  }

  onLoadGorselList(event: KkOperatorBilgiGörseller) {
    this.facade.getOprBilgiGorselList(event.idOperatorBilgilendirme);
  }

  onAddKatalogGorsel(event: GenericGorselUploadEvent) {
    this.facade.addGorsel(event.data, event.id);
  }

  onRemoveKatalogGorsel(event: OperatorGorselRemoveEvent) {
    this.facade.removeGorsel(event.data);
  }
}
