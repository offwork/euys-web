/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, PfdmKalinlikCap } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Pfdm3101 Page] Init');

export const loadPfdm3101Success = createAction(
  '[Pfdm3101/API] Load Pfdm3101 Success',
  props<{ data: PfdmKalinlikCap[] }>()
);

export const loadPfdm3101Failure = createAction(
  '[Pfdm3101/API] Load Pfdm3101 Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[Pfdm3101 Page] Save',
  props<{ pfdmKalinlikCap: PfdmKalinlikCap }>()
);

export const deletePfdm = createAction(
  '[Pfdm3101 Page] Delete',
  props<{ pfdmKalinlikCap: PfdmKalinlikCap }>()
);

export const savePfdm3101Success = createAction(
  '[Pfdm3101/API] Save Pfdm3101 Success',
  props<{ record: PfdmKalinlikCap }>()
);

export const deletePfdm3101Success = createAction(
  '[Pfdm3101/API] Delete Pfdm3101 Success',
  props<{ record: PfdmKalinlikCap }>()
);

export const savePfdm3101Failure = createAction(
  '[Pfdm3101/API] Save Pfdm3101 Failure',
  props<{ error: ErrorModel }>()
);

export const deletePfdm3101Failure = createAction(
  '[Pfdm3101/API] Delete Pfdm3101 Failure',
  props<{ error: ErrorModel }>()
);
