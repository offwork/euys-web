import {
  ErrorModel,
  KusurluIstifSorguModel,
  UtKusurluIstifPaketiComboValueModel,
  UtKusurluIstifPaketModel,
} from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Ut6002 Page] Init');

export const sorgula = createAction(
  '[Ut6002/API] Sorgula Ut6002',
  props<{ kusurluIstifSorguModel: KusurluIstifSorguModel }>()
);

export const loadUt6002Success = createAction(
  '[Ut6002/API] Load Ut6002 Success',
  props<{ data: UtKusurluIstifPaketModel[] }>()
);

export const loadUt6002Failure = createAction(
  '[Ut6002/API] Load Ut6002 Failure',
  props<{ error: ErrorModel }>()
);

//config
export const config = createAction('[Ut6002/API] Config');

export const configUt6002Success = createAction(
  '[Ut6002/API] Config Ut6002 Success',
  props<{
    utKusurluIstifPaketiComboValueModel: UtKusurluIstifPaketiComboValueModel;
  }>()
);

export const config6002Failure = createAction(
  '[Ut6002/API] Config Ut6002 Failure',
  props<{ error: ErrorModel }>()
);
