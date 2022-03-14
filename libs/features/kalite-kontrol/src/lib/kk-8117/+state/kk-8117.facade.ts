import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as Kk8117Selectors from './kk-8117.selectors';
import * as Kk8117Actions from './kk-8117.actions';

@Injectable()
export class Kk8117Facade {
  yuzeyKusurKaydiList$ = this.store.pipe(
    select(Kk8117Selectors.getyuzeyKusurKaydiList)
  );
  yuzeyKusurKaydiListLoaded$ = this.store.pipe(
    select(Kk8117Selectors.getyuzeyKusurKaydiListLoaded)
  );
  constructor(private readonly store: Store) {}

  init() {
    //empty
  }

  getYuzeyKusurKaydi(bobinNo: string) {
    this.store.dispatch(Kk8117Actions.getYuzeyKusurKaydiList({ bobinNo }));
  }
}
