import { createAction, props } from '@ngrx/store';
import { ErrorModel, KkUretimYuzeyKusuru } from '@euys/api-interfaces';

export const getYuzeyKusurKaydiList = createAction(
  '[Kk8117 Page] Get Yuzey Kusur Kaydi',
  props<{ bobinNo: string }>()
);

export const getYuzeyKusurKaydiListSuccess = createAction(
  '[Kk8117/API] Get Yuzey Kusur Kaydi Success',
  props<{ yuzeyKusurKaydi: KkUretimYuzeyKusuru[] }>()
);

export const getYuzeyKusurKaydiListFailure = createAction(
  '[Kk8117/API] Get Yüzey Kusur Kaydi Failure',
  props<{ error: ErrorModel }>()
);
