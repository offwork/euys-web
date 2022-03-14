import { KkUretimYuzeyKusuru, ErrorModel } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const getYuzeyKusurKaydiList = createAction(
  '[Kk8141 Page] Get Yuzey Kusur Kaydi',
  props<{ bobinNo: string }>()
);

export const getYuzeyKusurKaydiListSuccess = createAction(
  '[Kk8141/API] Get Yuzey Kusur Kaydi Success',
  props<{ yuzeyKusurKaydi: KkUretimYuzeyKusuru[] }>()
);

export const getYuzeyKusurKaydiListFailure = createAction(
  '[Kk8141/API] Get Yüzey Kusur Kaydi Failure',
  props<{ error: ErrorModel }>()
);
