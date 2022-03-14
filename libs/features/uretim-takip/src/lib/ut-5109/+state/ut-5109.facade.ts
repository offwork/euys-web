import { Injectable } from '@angular/core';
import { UtMerkezHaddeYagEmulsiyonModel } from '@euys/api-interfaces';
import { select, Store } from '@ngrx/store';

import * as Ut5109Actions from './ut-5109.actions';
import * as Ut5109Selectors from './ut-5109.selectors';

@Injectable()
export class Ut5109Facade {
  loaded$ = this.store.pipe(select(Ut5109Selectors.getUt5109Loaded));
  data$ = this.store.pipe(select(Ut5109Selectors.getUt5109MerkezHaddeListesi));
  loglar$ = this.store.pipe(select(Ut5109Selectors.getUt5109LogListesi));
  utMerkezHaddeYagEmulsiyonModelCode$ = this.store.pipe(
    select(Ut5109Selectors.getUt5109Message)
  );
  updatedData$ = this.store.pipe(select(Ut5109Selectors.getUt5109UpdatedData));
  defaultRow$ = this.store.pipe(select(Ut5109Selectors.getUt5109DefaultRow));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(Ut5109Actions.init());
  }

  loglar(utMerkezHaddeYagEmulsiyonModel: UtMerkezHaddeYagEmulsiyonModel) {
    this.store.dispatch(
      Ut5109Actions.loadUt5109Loglar({ utMerkezHaddeYagEmulsiyonModel })
    );
  }

  save(utMerkezHaddeYagEmulsiyonModel: UtMerkezHaddeYagEmulsiyonModel) {
    this.store.dispatch(Ut5109Actions.save({ utMerkezHaddeYagEmulsiyonModel }));
  }

  update(utMerkezHaddeYagEmulsiyonModel: UtMerkezHaddeYagEmulsiyonModel) {
    this.store.dispatch(
      Ut5109Actions.update({ utMerkezHaddeYagEmulsiyonModel })
    );
  }
}
