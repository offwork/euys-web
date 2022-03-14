import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as Kk8246Actions from './kk-8246.actions';
import * as Kk8246Selectors from './kk-8246.selectors';
@Injectable()
export class Kk8246Facade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  asitlemeBobinList$ = this.store.pipe(
    select(Kk8246Selectors.selectAsitlemeBobinList)
  );
  asitlemeBobinListLoaded$ = this.store.pipe(
    select(Kk8246Selectors.selectAsitlemeBobinListLoaded)
  );
  bagimsizNumuneGoruntuleme$ = this.store.pipe(
    select(Kk8246Selectors.selectBagimsizNumuneGoruntuleme)
  );
  bagimsizNumuneGoruntulemeLoaded$ = this.store.pipe(
    select(Kk8246Selectors.selectBagimsizNumuneGoruntulemeLoaded)
  );
  bagimsizMesajBilgileri$ = this.store.pipe(
    select(Kk8246Selectors.selectBagimsizMesajBilgileri)
  );
  bagimsizMesajBilgileriLoaded$ = this.store.pipe(
    select(Kk8246Selectors.selectBagimsizMesajBilgileriLoaded)
  );
  cplHattiAsitleme$ = this.store.pipe(
    select(Kk8246Selectors.selectCplHattiAsitleme)
  );
  cplHattiAsitlemeLoaded$ = this.store.pipe(
    select(Kk8246Selectors.selectCplHattiAsitlemeLoaded)
  );
  cplHattiDurulama$ = this.store.pipe(
    select(Kk8246Selectors.selectCplHattiDurulama)
  );
  cplHattiDurulamaLoaded$ = this.store.pipe(
    select(Kk8246Selectors.selectCplHattiDurulamaLoaded)
  );
  pplHattiAsitleme$ = this.store.pipe(
    select(Kk8246Selectors.selectPplHattiAsitleme)
  );
  pplHattiAsitlemeLoaded$ = this.store.pipe(
    select(Kk8246Selectors.selectPplHattiAsitlemeLoaded)
  );

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(Kk8246Actions.getAsitlemeBobinList({ hatNo: '501' }));
  }

  getAsitlemeBobinList(hatNo: string) {
    this.store.dispatch(Kk8246Actions.getAsitlemeBobinList({ hatNo }));
  }

  getBagimsizNumuneGoruntuleme(hatNo: string, bobinNo: string) {
    this.store.dispatch(
      Kk8246Actions.getBagimsizNumuneGoruntuleme({ hatNo, bobinNo })
    );
  }
  resetBagimsizNumuneGoruntuleme() {
    this.store.dispatch(Kk8246Actions.resetBagimsizNumuneGoruntuleme());
  }
  getBagimsizMesajBilgileri(hatNo: string, bobinNo: string) {
    this.store.dispatch(Kk8246Actions.getBagimsizMesajBilgileri({ bobinNo }));
  }
  resetBagimsizMesajBilgileri() {
    this.store.dispatch(Kk8246Actions.resetBagimsizMesajBilgileri());
  }
  getCplHattiAsitleme(hatNo: string, bobinNo: string) {
    this.store.dispatch(Kk8246Actions.getCplHattiAsitleme({ hatNo, bobinNo }));
  }
  resetCplHattiAsitleme() {
    this.store.dispatch(Kk8246Actions.resetCplHattiAsitleme());
  }
  getCplHattiDurulama(hatNo: string, bobinNo: string) {
    this.store.dispatch(Kk8246Actions.getCplHattiDurulama({ hatNo, bobinNo }));
  }
  resetCplHattiDurulama() {
    this.store.dispatch(Kk8246Actions.resetCplHattiDurulama());
  }
}
