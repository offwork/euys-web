/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtAgirlik, PfdmKalinlikCap } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[PfdmKalinlikCap Page] Init');

export const loadPfdmKalinlikCapSuccess = createAction(
  '[PfdmKalinlikCap/API] Load PfdmKalinlikCap Success',
  props<{ data: PfdmKalinlikCap[] }>()
);

export const loadPfdmKalinlikCapFailure = createAction(
  '[PfdmKalinlikCap/API] Load PfdmKalinlikCap Failure',
  props<{ error: ErrorModel }>()
);

export const save = createAction(
  '[PfdmKalinlikCap Page] Save',
  props<{ pfdmKalinlikCap: PfdmKalinlikCap }>()
);

export const deletePfdm = createAction(
  '[PfdmKalinlikCap Page] Delete',
  props<{ pfdmKalinlikCap: PfdmKalinlikCap }>()
);

export const savePfdmKalinlikCapSuccess = createAction(
  '[PfdmKalinlikCap/API] Save PfdmKalinlikCap Success',
  props<{ record: PfdmKalinlikCap }>()
);

export const deletePfdmKalinlikCapSuccess = createAction(
  '[PfdmKalinlikCap/API] Delete PfdmKalinlikCap Success',
  props<{ record: PfdmKalinlikCap }>()
);

export const savePfdmKalinlikCapFailure = createAction(
  '[PfdmKalinlikCap/API] Save PfdmKalinlikCap Failure',
  props<{ error: ErrorModel }>()
);

export const deletePfdmKalinlikCapFailure = createAction(
  '[PfdmKalinlikCap/API] Delete PfdmKalinlikCap Failure',
  props<{ error: ErrorModel }>()
);
