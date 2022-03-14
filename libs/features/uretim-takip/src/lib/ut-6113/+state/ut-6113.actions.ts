import { createAction, props } from '@ngrx/store';
import {
  ErrorModel,
  UtDurdurmaKodAdlariModel,
  UtDurdurmaKodAdlariView,
  UtDurdurmaKodlariComboValueModel,
} from '@euys/api-interfaces';

export const init = createAction('[Ut6113 Page] Init');

export const loadUt6113Success = createAction(
  '[Ut6113/API] Load Ut6113 Success',
  props<{ data: UtDurdurmaKodAdlariModel[] }>()
);
export const loadUt6113Failure = createAction(
  '[Ut6113/API] Load Ut6113 Failure',
  props<{ error: ErrorModel }>()
);

export const saveUt6113 = createAction(
  '[Ut6113/API] Save Ut6113',
  props<{ data: UtDurdurmaKodAdlariModel }>()
);
export const saveUt6113Success = createAction(
  '[Ut6113/API] Save Ut6113 Success',
  props<{ data: UtDurdurmaKodAdlariModel }>()
);

export const deleteUt6113 = createAction(
  '[Ut6113/API] Delete Ut6113',
  props<{ data: UtDurdurmaKodAdlariModel }>()
);
export const deleteUt6113Success = createAction(
  '[Ut6113/API] Delete Ut6113 Success',
  props<{ data: UtDurdurmaKodAdlariModel }>()
);

export const loadListelerUt6113 = createAction(
  '[Ut6113/API] Get Ut6113 Listeler'
);
export const loadListelerUt6113Success = createAction(
  '[Ut6113/API] Get Ut6113 Listeler Success',
  props<{ data: UtDurdurmaKodlariComboValueModel }>()
);

export const findByAnaKodUt6113 = createAction(
  '[Ut6113/API] Find By Ana Kod Ut6113',
  props<{ anaKod: string }>()
);
export const findByAnaKodUt6113Success = createAction(
  '[Ut6113/API] Find By Ana Kod Ut6113 Success',
  props<{ data: UtDurdurmaKodAdlariView }>()
);
