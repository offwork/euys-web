import { createAction, props } from '@ngrx/store';
import {
  ErrorModel,
  KusurluIstifSorguModel,
  UtKusurluIstifPaketiComboValueModel,
  UtKusurluIstifPaketModel,
} from '@euys/api-interfaces';

export const init = createAction('[Ut6001 Page] Init');

export const sorgula = createAction(
  '[Ut6001/API] Sorgula Ut6001',
  props<{ kusurluIstifSorguModel: KusurluIstifSorguModel }>()
);

export const loadUt6001Success = createAction(
  '[Ut6001/API] Load Ut6001 Success',
  props<{ data: UtKusurluIstifPaketModel[] }>()
);

export const loadUt6001Failure = createAction(
  '[Ut6001/API] Load Ut6001 Failure',
  props<{ error: ErrorModel }>()
);

//config
export const config = createAction('[Ut6001/API] Config');

export const configUt6001Success = createAction(
  '[Ut6001/API] Config Ut6001 Success',
  props<{
    utKusurluIstifPaketiComboValueModel: UtKusurluIstifPaketiComboValueModel;
  }>()
);

export const config6001Failure = createAction(
  '[Ut6001/API] Config Ut6001 Failure',
  props<{ error: ErrorModel }>()
);

//save
export const save = createAction(
  '[Ut6001/API] Save',
  props<{ utKusurluIstifPaketModel: UtKusurluIstifPaketModel }>()
);

export const saveUt6001Success = createAction(
  '[Ut6001/API] Save Ut6001 Success',
  props<{ utKusurluIstifPaketModel: UtKusurluIstifPaketModel }>()
);

export const saveUt6001Failure = createAction(
  '[Ut6001/API] Save Ut6001 Failure',
  props<{ error: ErrorModel }>()
);

//iptal
export const iptalEt = createAction(
  '[Ut6001/API] Iptal',
  props<{ utKusurluIstifPaketModel: UtKusurluIstifPaketModel }>()
);

export const iptalUt6001Success = createAction(
  '[Ut6001/API] Iptal Ut6001 Success',
  props<{ utKusurluIstifPaketModel: UtKusurluIstifPaketModel }>()
);

export const iptalUt6001Failure = createAction(
  '[Ut6001/API] Iptal Ut6001 Failure',
  props<{ error: ErrorModel }>()
);
