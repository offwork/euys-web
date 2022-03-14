/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, PfdmGenislikAraligi } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Pfdm3102 Page] Init');

export const loadPfdm3102Success = createAction(
  '[Pfdm3102/API] Load Pfdm3102 Success',
  props<{ data: PfdmGenislikAraligi[] }>()
);

export const loadPfdm3102Failure = createAction(
  '[Pfdm3102/API] Load Pfdm3102 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Pfdm3102 Page] Save',
  props<{ pfdmGenislikAraligi: PfdmGenislikAraligi }>()
);

export const deletePfdm = createAction(
  '[Pfdm3102 Page] Delete',
  props<{ pfdmGenislikAraligi: PfdmGenislikAraligi }>()
);

export const savePfdm3102Success = createAction(
  '[Pfdm3102/API] Save Pfdm3102 Success',
  props<{ record: PfdmGenislikAraligi }>()
);

export const deletePfdm3102Success = createAction(
  '[Pfdm3102/API] Delete Pfdm3102 Success',
  props<{ record: PfdmGenislikAraligi }>()
);

export const savePfdm3102Failure = createAction(
  '[Pfdm3102/API] Save Pfdm3102 Failure',
  props<{ error: ErrorModel }>()
);

export const deletePfdm3102Failure = createAction(
  '[Pfdm3102/API] Delete Pfdm3102 Failure',
  props<{ error: ErrorModel }>()
);
