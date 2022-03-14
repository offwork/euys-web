/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, PfdmYuzeyKaplama } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Pfdm3103 Page] Init');

export const loadPfdm3103Success = createAction(
  '[Pfdm3103/API] Load Pfdm3103 Success',
  props<{ data: PfdmYuzeyKaplama[] }>()
);

export const loadPfdm3103Failure = createAction(
  '[Pfdm3103/API] Load Pfdm3103 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Pfdm3103 Page] Save',
  props<{ pfdmYuzeyKaplama: PfdmYuzeyKaplama }>()
);

export const deletePfdm = createAction(
  '[Pfdm3103 Page] Delete',
  props<{ pfdmYuzeyKaplama: PfdmYuzeyKaplama }>()
);

export const savePfdm3103Success = createAction(
  '[Pfdm3103/API] Save Pfdm3103 Success',
  props<{ record: PfdmYuzeyKaplama }>()
);

export const deletePfdm3103Success = createAction(
  '[Pfdm3103/API] Delete Pfdm3103 Success',
  props<{ record: PfdmYuzeyKaplama }>()
);

export const savePfdm3103Failure = createAction(
  '[Pfdm3103/API] Save Pfdm3103 Failure',
  props<{ error: ErrorModel }>()
);

export const deletePfdm3103Failure = createAction(
  '[Pfdm3103/API] Delete Pfdm3103 Failure',
  props<{ error: ErrorModel }>()
);
