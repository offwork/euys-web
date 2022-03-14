import { Injectable } from '@angular/core';
import {
  IslemTipi,
  KkKusurAna,
  KkKusurKtlgGorsel,
  KusurKatalogView,
  KusurKoduKayit,
  KusurSiddeti,
  KusurYogunlugu,
} from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import * as Kk8101Actions from './kk-8101.actions';
import * as Kk8101Selectors from './kk-8101.selectors';

@Injectable()
export class Kk8101Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  kusurListLoaded$ = this.store.pipe(
    select(Kk8101Selectors.getKk8101KusurListLoaded)
  );
  kusurList$ = this.store.pipe(select(Kk8101Selectors.getKk8101KusurList));
  kusurSinifiListLoaded$ = this.store.pipe(
    select(Kk8101Selectors.getKk8101KusurSinifiListLoaded)
  );
  kusurSinifiList$ = this.store.pipe(
    select(Kk8101Selectors.getKk8101KusurSinifiList)
  );
  kusurAnaListLoaded$ = this.store.pipe(
    select(Kk8101Selectors.getKk8101KusurAnaListLoaded)
  );
  kusurAnaList$ = this.store.pipe(
    select(Kk8101Selectors.getKk8101KusurAnaList)
  );
  ktUrunList$ = this.store.pipe(select(Kk8101Selectors.selectKk8101KtUrunList));
  ktUrunListLoaded$ = this.store.pipe(
    select(Kk8101Selectors.selectKk8101KtUrunListLoaded)
  );
  utHatList$ = this.store.pipe(select(Kk8101Selectors.getKk8101UtHatList));
  utHatListLoaded$ = this.store.pipe(
    select(Kk8101Selectors.getKk8101UtHatListLoaded)
  );

  kaliteler$ = this.store.pipe(select(Kk8101Selectors.getKalitelerList));
  kalitelerLoaded$ = this.store.pipe(
    select(Kk8101Selectors.getKalitelerListLoaded)
  );

  defaultKusur$ = this.store.pipe(
    select(Kk8101Selectors.getKk8101DefaultKusur)
  );

  katalogViewListLoaded$ = this.store.pipe(
    select(Kk8101Selectors.getKk8101KusurKatalogViewListLoaded)
  );

  katalogViewList$ = this.store.pipe(
    select(Kk8101Selectors.getKk8101KusurKatalogViewList)
  );

  isAddKatalogButtonDisabled$ = this.store.pipe(
    select(Kk8101Selectors.getKk8101CanAddNewKatalog),
    map(canAddNewCatalog => !canAddNewCatalog)
  );

  newKatalogView$ = this.store.pipe(select(Kk8101Selectors.getNewKatalogView));

  katalogHatComboListLoaded$ = this.store.pipe(
    select(Kk8101Selectors.selectKatalogHatComboListLoaded)
  );

  katalogHatComboList$ = this.store.pipe(
    select(Kk8101Selectors.selectKatalogHatComboList)
  );

  katalogGorselList$ = this.store.pipe(
    select(Kk8101Selectors.selectKatalogGorselList)
  );

  katalogGorselListLoaded$ = this.store.pipe(
    select(Kk8101Selectors.selectKatalogGorselListLoaded)
  );

  addKatalogGorselSuccess$ = this.store.pipe(
    select(Kk8101Selectors.selectAddKatalogGorselSuccess)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init(): void {
    this.store.dispatch(Kk8101Actions.initKusurList());
    this.store.dispatch(Kk8101Actions.initKusurSinifiList());
    this.store.dispatch(Kk8101Actions.initKusurAnaList());
    this.store.dispatch(Kk8101Actions.initHatList());
    this.store.dispatch(Kk8101Actions.initKaliteler());
    this.store.dispatch(Kk8101Actions.initUrunList());
  }

  saveKkKusurAna(kkKusurAna: KkKusurAna): void {
    this.store.dispatch(Kk8101Actions.saveKkKusurAna({ kkKusurAna }));
  }

  saveKusurKodu(kusur: KusurKoduKayit): void {
    this.store.dispatch(Kk8101Actions.saveKusur({ kusur }));
  }

  getKusur(kusurKodu: string) {
    this.store.dispatch(Kk8101Actions.getKusur({ kusurKodu }));
  }
  resetDefaultKusur() {
    this.store.dispatch(Kk8101Actions.resetDefaultKusur());
  }

  createKatalogView(kusurKodu: string) {
    this.store.dispatch(
      Kk8101Actions.addNewKatalogView({
        kusurKatalog: {
          kkKusurKtlgHat: {
            hatKodu: null,
            id: null,
            kusurKodu,
            etag: null,
            islemTipiNo: IslemTipi.KAYIT,
            islemYapanKisi: null,
            islemYapanMenu: null,
            olusturanKisi: null,
          },
          kkKusurKtlgKokNedenList: [],
          kkKusurKtlgMuhOprYorumList: [],
          kkKusurKtlgOnlemlerList: [],
          kkKusurKtlgSiddetTanimList: [
            KusurSiddeti.HAFIF,
            KusurSiddeti.ORTA,
            KusurSiddeti.AGIR,
          ].map(kusurSiddetNo => ({
            id: null,
            idKusurHat: null,
            kusurSiddetNo,
            kusurSiddetTanim: null,
            etag: null,
            islemTipiNo: IslemTipi.KAYIT,
            islemYapanKisi: null,
            islemYapanMenu: null,
            olusturanKisi: null,
          })),
          kkKusurKtlgYatkinKalitelerList: [],
          kkKusurKtlgYogunlukTanimList: [
            KusurYogunlugu.SEYREK,
            KusurYogunlugu.SIK,
            KusurYogunlugu.SUREKLI,
          ].map(kusurYogunlukNo => ({
            id: null,
            idKusurHat: null,
            kusurYogunlukNo,
            kusurYogunlukTanim: null,
            etag: null,
            islemTipiNo: IslemTipi.KAYIT,
            islemYapanKisi: null,
            islemYapanMenu: null,
            olusturanKisi: null,
          })),
        },
      })
    );
  }

  deleteUnsavedKatalog(): void {
    this.store.dispatch(Kk8101Actions.removeUnsavedKatalogView());
  }

  loadKatalogHatCombo(kusurKodu: string): void {
    this.store.dispatch(Kk8101Actions.getKatalogComboList({ kusurKodu }));
  }

  resetKatalogHatCombo() {
    this.store.dispatch(Kk8101Actions.resetKatalogCombo());
  }

  updateKusurKatalogView(kusurKatalog: KusurKatalogView) {
    this.store.dispatch(Kk8101Actions.updateKusurKatalog({ kusurKatalog }));
  }

  saveNewKusurKatalogView(kusurKatalog: KusurKatalogView) {
    this.store.dispatch(Kk8101Actions.saveKusurKatalog({ kusurKatalog }));
  }

  loadKatalogGorselList(kusurKodu: string, hatKodu: string) {
    this.store.dispatch(
      Kk8101Actions.loadKatalogGorselList({ kusurKodu, hatKodu })
    );
  }

  resetKatalogGorselList() {
    this.store.dispatch(Kk8101Actions.resetKatalogGorselList());
  }

  addGorsel(body: FormData, kusurKodu: string, hatKodu: string) {
    this.store.dispatch(
      Kk8101Actions.addKatalogGorsel({ data: body, kusurKodu, hatKodu })
    );
  }

  removeGorsel(gorsel: KkKusurKtlgGorsel, kusurKodu: string, hatKodu: string) {
    this.store.dispatch(
      Kk8101Actions.removeKatalogGorsel({ gorsel, kusurKodu, hatKodu })
    );
  }

  removeKusurKatalog(kusurKatalog: KusurKatalogView, index: number) {
    this.store.dispatch(
      Kk8101Actions.deleteKusurKatalog({ kusurKatalog, index })
    );
  }
}
