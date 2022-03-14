import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  KkKusurKtlgGorsel,
  KkKusurKtlgHat,
  KkKusurKtlgYatkinKaliteler,
  KusurKatalogView,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kk8101Facade } from '../+state/kk-8101.facade';
import { GorselRemoveEvent } from '../../shared/ana-veri/interfaces/gorsel-remove-event';
import { GorselUploadEvent } from '../../shared/ana-veri/interfaces/gorsel-upload-event';

@Component({
  selector: 'euys-kk8101',
  templateUrl: './kk-8101.component.html',
})
export class Kk8101Component implements OnInit {
  kusurListLoaded$ = this.facade.kusurListLoaded$;
  kusurList$ = this.facade.kusurList$;
  kusurSinifiListLoaded$ = this.facade.kusurSinifiListLoaded$;
  kusurSinifiList$ = this.facade.kusurSinifiList$;
  kusurAnaListLoaded$ = this.facade.kusurAnaListLoaded$;
  kusurAnaList$ = this.facade.kusurAnaList$;
  utHatList$ = this.facade.utHatList$;
  katalogViewListLoaded$ = this.facade.katalogViewListLoaded$;
  katalogViewList$ = this.facade.katalogViewList$;
  isKatalogAddButtonDisabled$ = this.facade.isAddKatalogButtonDisabled$;
  newKatalog$ = this.facade.newKatalogView$;
  kaliteList$: Observable<KkKusurKtlgYatkinKaliteler[]> =
    this.facade.kaliteler$.pipe(
      map(kaliteler =>
        kaliteler.map(({ kodu }) => ({
          id: null,
          idKusurHat: null,
          celikKalitesi: kodu,
        }))
      )
    );
  kaliteListLoaded$ = this.facade.kalitelerLoaded$;
  ktUrunListLoaded$ = this.facade.ktUrunListLoaded$;
  ktUrunList$ = this.facade.ktUrunList$;
  gorselList$ = this.facade.katalogGorselList$;
  gorselListLoaded$ = this.facade.katalogGorselListLoaded$;

  constructor(public facade: Kk8101Facade) {}

  ngOnInit(): void {
    this.facade.init();
  }

  onAddNewKatalog(kusurKodu: string): void {
    this.facade.createKatalogView(kusurKodu);
  }
  onRemoveKatalog(event: { katalog: KusurKatalogView; index: number }) {
    if (!event.index) {
      this.facade.deleteUnsavedKatalog();
      return;
    }
    if (event.katalog.kkKusurKtlgHat.id) {
      this.facade.removeKusurKatalog(event.katalog, event.index);
    }
  }

  onResetGorselList() {
    this.facade.resetKatalogGorselList();
  }

  onLoadGorselList(event: KkKusurKtlgHat) {
    this.facade.loadKatalogGorselList(event.kusurKodu, event.hatKodu);
  }

  onAddKatalogGorsel(event: GorselUploadEvent) {
    this.facade.addGorsel(event.data, event.kusurKodu, event.hatKodu);
  }

  onRemoveKatalogGorsel(event: GorselRemoveEvent) {
    this.facade.removeGorsel(event.data, event.kusurKodu, event.hatKodu);
  }

  onSaveUpdate(kusurKatalogView: KusurKatalogView) {
    if (kusurKatalogView.kkKusurKtlgHat.id) {
      this.facade.updateKusurKatalogView(kusurKatalogView);
    } else this.facade.saveNewKusurKatalogView(kusurKatalogView);
  }
}
