import {
  BagimsizNumuneGoruntulemeModel,
  AsitlemeProsesModel,
  AsitlemeBobinModel,
  ErrorModel,
  DurulamaProsesModel,
} from '@euys/api-interfaces';

import { createAction, props } from '@ngrx/store';
export const init = createAction('[Kk8246 Page] Init');

export const getAsitlemeBobinList = createAction(
  '[Kk8246 Page] Get Asitleme Bobin List',
  props<{ hatNo: string }>()
);

export const getAsitlemeBobinListSuccess = createAction(
  '[Kk8246/API] Get Asitleme Bobin List Success',
  props<{ asitlemeBobinList: AsitlemeBobinModel[] }>()
);

export const getAsitlemeBobinListFailure = createAction(
  '[Kk8246/API] Get Asitleme Bobin List Failure',
  props<{ error: ErrorModel }>()
);

export const getBagimsizNumuneGoruntuleme = createAction(
  '[Kk8246 Page] Get Bagimsiz Numune Goruntuleme Bilgisi',
  props<{ bobinNo: string; hatNo: string }>()
);
export const updateBagimsizNumuneGoruntuleme = createAction(
  '[Kk8115 Page] Update Bagimsiz Numune Gorüntuleme',
  props<{ KkBagimsizNumuneGoruntuleme: BagimsizNumuneGoruntulemeModel[] }>()
);
export const getBagimsizNumuneGoruntulemeSuccess = createAction(
  '[Kk8246/API] Get Bagimsiz Numune Goruntuleme Success',
  props<{ bagimsizNumuneGoruntuleme: BagimsizNumuneGoruntulemeModel[] }>()
);

export const getBagimsizNumuneGoruntulemeFailure = createAction(
  '[Kk8246/API] Get Bagimsiz Numune Goruntuleme Failure',
  props<{ error: ErrorModel }>()
);
export const resetBagimsizNumuneGoruntuleme = createAction(
  '[Kk8246 Page] Reset Bagimsiz Numune Goruntuleme Bilgisi'
);
export const getBagimsizMesajBilgileri = createAction(
  '[Kk8246 Page] Get Bagimsiz Mesaj  Bilgisi',
  props<{ bobinNo: string }>()
);
export const getBagimsizMesajBilgileriSuccess = createAction(
  '[Kk8246/API] Get Bagimsiz Mesaj Bilgileri Success',
  props<{ bagimsizMesajBilgileri: BagimsizNumuneGoruntulemeModel[] }>()
);

export const getBagimsizMesajBilgileriFailure = createAction(
  '[Kk8246/API] Get Bagimsiz Mesaj Bilgileri Failure',
  props<{ error: ErrorModel }>()
);
export const resetBagimsizMesajBilgileri = createAction(
  '[Kk8246 Page] Reset Bagimsiz Numune Goruntuleme Bilgisi'
);
export const getCplHattiAsitleme = createAction(
  '[Kk8246/API] Get Cpl Hatti Asitleme List',
  props<{ hatNo: string; bobinNo: string }>()
);
export const getCplHattiAsitlemeSuccess = createAction(
  '[Kk8246/API] Get Cpl Hatti Asitleme List Success',
  props<{ cplHatti: AsitlemeProsesModel[] }>()
);
export const resetCplHattiAsitleme = createAction(
  '[Kk8246 Page] Reset Cpl Hattı Asitleme List Bilgisi'
);
export const getCplHattiAsitlemeFailure = createAction(
  '[Kk8246/API] Get Cpl Hatti Asitleme List Failure',
  props<{ error: ErrorModel }>()
);
export const getCplHattiDurulama = createAction(
  '[Kk8246/API] Get Cpl Hatti Durulama List',
  props<{ hatNo: string; bobinNo: string }>()
);
export const getCplHattiDurulamaSuccess = createAction(
  '[Kk8246/API] Get Cpl Hatti Durulama List Success',
  props<{ cplHatti: DurulamaProsesModel[] }>()
);
export const resetCplHattiDurulama = createAction(
  '[Kk8246 Page] Reset Cpl Hattı Durulama List Bilgisi'
);
export const getCplHattiDurulamaFailure = createAction(
  '[Kk8246/API] Get Cpl Hatti Durulama List Failure',
  props<{ error: ErrorModel }>()
);
