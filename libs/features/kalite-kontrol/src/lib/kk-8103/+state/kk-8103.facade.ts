import { Injectable } from '@angular/core';
import {
  KkOperatorBilgilendirme,
  KkOperatorBilgiGörseller,
} from '@euys/api-interfaces';

import { select, Store } from '@ngrx/store';

import * as Kk8103Actions from './kk-8103.actions';
import * as Kk8103Selectors from './kk-8103.selectors';

@Injectable()
export class Kk8103Facade {
  oprBilgiKayitLoaded$ = this.store.pipe(
    select(Kk8103Selectors.getKk8103oprBilgiKayitLoaded)
  );
  oprBilgiKayit$ = this.store.pipe(
    select(Kk8103Selectors.getKk8103oprBilgiKayitList)
  );

  musteriListLoaded$ = this.store.pipe(
    select(Kk8103Selectors.getKk8103MusteriListLoaded)
  );
  musteriList$ = this.store.pipe(select(Kk8103Selectors.getKk8103MusteriList));

  urunListLoaded$ = this.store.pipe(
    select(Kk8103Selectors.getKk8103UrunListLoaded)
  );
  urunList$ = this.store.pipe(select(Kk8103Selectors.getKk8103UrunList));

  kaliteListLoaded$ = this.store.pipe(
    select(Kk8103Selectors.getKk8103KaliteListLoaded)
  );
  kaliteList$ = this.store.pipe(select(Kk8103Selectors.getKk8103KaliteList));

  oprBilgiGorselList$ = this.store.pipe(
    select(Kk8103Selectors.selectOprBilgiGorselList)
  );
  oprBilgiGorselListLoaded$ = this.store.pipe(
    select(Kk8103Selectors.selectOprBilgiGorselListLoaded)
  );

  addOprBilgiGorselSuccess$ = this.store.pipe(
    select(Kk8103Selectors.selectAddOprBilgiGorselSuccess)
  );

  constructor(private readonly store: Store) {}

  init(): void {
    //this.store.dispatch(Kk8103Actions.init());
    this.store.dispatch(Kk8103Actions.initMusteriList());
    this.store.dispatch(Kk8103Actions.initUrunList());
    this.store.dispatch(Kk8103Actions.initKaliteList());
    //this.store.dispatch(Kk8103Actions.addOprBilgiGorsel({data: FormData; id: string;}));
  }

  saveOprBilgilendirme(oprBilgiKayit: KkOperatorBilgilendirme): void {
    this.store.dispatch(Kk8103Actions.saveOprBilgi({ oprBilgiKayit }));
  }

  resetOprBilgi() {
    this.store.dispatch(Kk8103Actions.resetOprBilgi());
  }

  getOprBilgiGorselList(idOperatorBilgilendirme: string) {
    this.store.dispatch(
      Kk8103Actions.getOprBilgilendirmeGorselList({ idOperatorBilgilendirme })
    );
  }

  resetOprBilgiGorselList() {
    this.store.dispatch(Kk8103Actions.resetOprBilgiGorselList());
  }

  addGorsel(body: FormData, idOperatorBilgilendirme: string) {
    this.store.dispatch(
      Kk8103Actions.addOprBilgilendirmeGorsel({
        idOperatorBilgilendirme,
        data: body,
      })
    );
  }

  removeGorsel(gorsel: KkOperatorBilgiGörseller) {
    this.store.dispatch(
      Kk8103Actions.removeOprBilgilendirmeGorsel({
        gorsel,
      })
    );
  }
}
