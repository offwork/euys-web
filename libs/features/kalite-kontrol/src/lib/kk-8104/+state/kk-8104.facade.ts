import { Injectable } from '@angular/core';
import {
  KkOperatorBilgiGörseller,
  KkOperatorBilgilendirme,
} from '@euys/api-interfaces';
import { select, Store, Action } from '@ngrx/store';

import * as Kk8104Actions from './kk-8104.actions';
import * as Kk8104Selectors from './kk-8104.selectors';

@Injectable()
export class Kk8104Facade {
  oprBilgilendirmeList$ = this.store.pipe(
    select(Kk8104Selectors.selectOprBilgilendirmeList)
  );

  oprBilgilendirmeListLoaded$ = this.store.pipe(
    select(Kk8104Selectors.selectOprBilgilendirmeListLoaded)
  );

  oprBilgilendirmeData$ = this.store.pipe(
    select(Kk8104Selectors.selectOprBilgilendirmeData)
  );

  oprBilgilendirmeDataLoaded$ = this.store.pipe(
    select(Kk8104Selectors.selectOprBilgilendirmeDataLoaded)
  );

  oprBilgiGorselList$ = this.store.pipe(
    select(Kk8104Selectors.selectOprBilgiGorselList)
  );
  oprBilgiGorselListLoaded$ = this.store.pipe(
    select(Kk8104Selectors.selectOprBilgiGorselListLoaded)
  );

  addOprBilgiGorselSuccess$ = this.store.pipe(
    select(Kk8104Selectors.selectAddOprBilgiGorselSuccess)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(Kk8104Actions.initOprBilgilendirmeList());
  }

  getOprBilgilendirmeData(id: string) {
    this.store.dispatch(Kk8104Actions.getOprBilgilendirmeData({ id }));
  }

  setOprDataLoadedFalse() {
    this.store.dispatch(Kk8104Actions.setOprDataLoadedFalse());
  }

  updateOprBilgilendirme(oprBilgilendirme: KkOperatorBilgilendirme) {
    this.store.dispatch(
      Kk8104Actions.updateOprBilgilendirme({ oprBilgilendirme })
    );
  }

  deleteOprBilgilendirme(id: string, etag: string) {
    this.store.dispatch(Kk8104Actions.deleteOprBilgilendirme({ id, etag }));
  }

  getOprBilgiGorselList(idOperatorBilgilendirme: string) {
    this.store.dispatch(
      Kk8104Actions.getOprBilgilendirmeGorselList({ idOperatorBilgilendirme })
    );
  }

  resetOprBilgiGorselList() {
    this.store.dispatch(Kk8104Actions.resetOprBilgiGorselList());
  }

  addGorsel(body: FormData, idOperatorBilgilendirme: string) {
    this.store.dispatch(
      Kk8104Actions.addOprBilgilendirmeGorsel({
        idOperatorBilgilendirme,
        data: body,
      })
    );
  }

  removeGorsel(gorsel: KkOperatorBilgiGörseller) {
    this.store.dispatch(
      Kk8104Actions.removeOprBilgilendirmeGorsel({
        gorsel,
      })
    );
  }
}
