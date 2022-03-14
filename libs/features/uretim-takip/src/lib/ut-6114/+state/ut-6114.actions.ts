import { createAction, props } from '@ngrx/store';
import {
  ErrorModel,
  UtDurdurmaKodAdlariModel,
  UtDurdurmaKodlariComboValueModel,
} from '@euys/api-interfaces';

export const init = createAction('[Ut6114 Page] Init');

export const loadUt6114Success = createAction(
  '[Ut6114/API] Load Ut6114 Success',
  props<{ data: UtDurdurmaKodAdlariModel[] }>()
);
export const loadUt6114Failure = createAction(
  '[Ut6114/API] Load Ut6114 Failure',
  props<{ error: ErrorModel }>()
);

export const loadListelerUt6114 = createAction(
  '[Ut6114/API] Get Ut6114 Listeler'
);
export const loadListelerUt6114Success = createAction(
  '[Ut6114/API] Get Ut6114 Listeler Success',
  props<{ data: UtDurdurmaKodlariComboValueModel }>()
);
