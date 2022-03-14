import { Combo, ErrorModel, KkUretimYuzeyKusuru } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const updateYuzeyKusurDegerleri = createAction(
  '[Kk8116 Page] Update Yuzey Kusur Degerleri',
  props<{ kkUretimYuzeyKusuru: KkUretimYuzeyKusuru[] }>()
);

export const getButunAktifKusurList = createAction(
  '[Kk8116/Page] Get Butun Aktif Kusur List',
  props<{ hatNo: string }>()
);

export const getButunAktifKusurListSuccess = createAction(
  '[Kk8116/API] Get Butun Aktif Kusur List Success',
  props<{ butunAktifKusurList: Combo[] }>()
);

export const getButunAktifKusurListFailure = createAction(
  '[Kk8116/API] Get Butun Aktif Kusur List Failure',
  props<{ error: ErrorModel }>()
);

export const getYuzeyKusurKaydiList = createAction(
  '[Kk8116 Page] Get Yuzey Kusur Kaydi',
  props<{ bobinNo: string }>()
);

export const getYuzeyKusurKaydiListSuccess = createAction(
  '[Kk8116/API] Get Yuzey Kusur Kaydi Success',
  props<{ yuzeyKusurKaydi: KkUretimYuzeyKusuru[] }>()
);

export const getYuzeyKusurKaydiListFailure = createAction(
  '[Kk8116/API] Get Yüzey Kusur Kaydi Failure',
  props<{ error: ErrorModel }>()
);
