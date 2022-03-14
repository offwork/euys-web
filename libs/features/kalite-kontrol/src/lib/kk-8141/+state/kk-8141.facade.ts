import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as Kk8141Actions from './kk-8141.actions';
import * as Kk8141Selectors from './kk-8141.selectors';

@Injectable()
export class Kk8141Facade {
  yuzeyKusurKaydiList$ = this.store.pipe(
    select(Kk8141Selectors.getYuzeyKusurKaydiList)
  );
  yuzeyKusurKaydiListLoaded$ = this.store.pipe(
    select(Kk8141Selectors.getYuzeyKusurKaydiListLoaded)
  );
  constructor(private readonly store: Store) {}

  init() {
    //empty
  }

  getYuzeyKusurKaydi(bobinNo: string) {
    this.store.dispatch(Kk8141Actions.getYuzeyKusurKaydiList({ bobinNo }));
  }
}
