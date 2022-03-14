/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, PfdmKaliteGrup } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Pfdm3104 Page] Init');

export const loadPfdm3104Success = createAction(
  '[Pfdm3104/API] Load Pfdm3104 Success',
  props<{ data: PfdmKaliteGrup[] }>()
);

export const loadPfdm3104Failure = createAction(
  '[Pfdm3104/API] Load Pfdm3104 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Pfdm3104 Page] Save',
  props<{ pfdmKaliteGrup: PfdmKaliteGrup }>()
);

export const deletePfdm = createAction(
  '[Pfdm3104 Page] Delete',
  props<{ pfdmKaliteGrup: PfdmKaliteGrup }>()
);

export const savePfdm3104Success = createAction(
  '[Pfdm3104/API] Save Pfdm3104 Success',
  props<{ record: PfdmKaliteGrup }>()
);

export const deletePfdm3104Success = createAction(
  '[Pfdm3104/API] Delete Pfdm3104 Success',
  props<{ record: PfdmKaliteGrup }>()
);

export const savePfdm3104Failure = createAction(
  '[Pfdm3104/API] Save Pfdm3104 Failure',
  props<{ error: ErrorModel }>()
);

export const deletePfdm3104Failure = createAction(
  '[Pfdm3104/API] Delete Pfdm3104 Failure',
  props<{ error: ErrorModel }>()
);
