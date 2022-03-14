import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as Kk8102Actions from './kk-8102.actions';
import * as Kk8102Selectors from './kk-8102.selectors';

@Injectable()
export class Kk8102Facade {
  utHatList$ = this.store.pipe(select(Kk8102Selectors.getKk8102UtHatList));

  kusurGoruntulemeList$ = this.store.pipe(
    select(Kk8102Selectors.getKk8102KusurGoruntulemeList)
  );

  hoverKusurTanimBaslik$ = this.store.pipe(
    select(Kk8102Selectors.hoverKusurTanimBaslik)
  );

  utHatListLoaded$ = this.store.pipe(
    select(Kk8102Selectors.getKk8102UtHatListLoaded)
  );

  kusurListLoaded$ = this.store.pipe(
    select(Kk8102Selectors.getKk8102KusurListLoaded)
  );

  tabloBaslik$ = this.store.pipe(select(Kk8102Selectors.tabloBaslik));

  isLoading$ = this.store.pipe(select(Kk8102Selectors.isLoading));

  kusurSinifiFilter$ = this.store.pipe(
    select(Kk8102Selectors.kusurSinifiFilter)
  );

  anaKusurKoduFilter$ = this.store.pipe(
    select(Kk8102Selectors.anaKusurKoduFilter)
  );

  anaKusurKoduAciklamaFilter$ = this.store.pipe(
    select(Kk8102Selectors.anaKusurKoduAciklamaFilter)
  );

  kusurKoduFilter$ = this.store.pipe(select(Kk8102Selectors.kusurKoduFilter));

  kusurKoduAciklamaFilter$ = this.store.pipe(
    select(Kk8102Selectors.kusurKoduAciklamaFilter)
  );

  statuFilter$ = this.store.pipe(select(Kk8102Selectors.statuFilter));

  hurdaFilter$ = this.store.pipe(select(Kk8102Selectors.hurdaFilter));

  isFilterMod$ = this.store.pipe(select(Kk8102Selectors.isFilterMod));

  constructor(private readonly store: Store) {}

  init(): void {
    this.store.dispatch(Kk8102Actions.initHatList());
    this.store.dispatch(Kk8102Actions.initKusurGoruntuleme());
  }

  hoverKusur(data: string): void {
    this.store.dispatch(Kk8102Actions.hoverKusurTanimBaslik({ data }));
  }

  customFilterEventFirlatici(values: string[], key: string): void {
    this.store.dispatch(Kk8102Actions.kusurGoruntulemeFilter({ values, key }));
  }

  filterTemizleyici() {
    this.store.dispatch(Kk8102Actions.filterTemizleyici());
  }
}
