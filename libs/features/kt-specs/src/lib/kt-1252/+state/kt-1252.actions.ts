/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtTcalSogutmaYaslandirma,  } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1252 Page] Init');

export const loadKt1252Success = createAction(
  '[Kt1252/API] Load Kt1252 Success',
  props<{ data: KtAtTcalSogutmaYaslandirma[] }>()
);

export const loadKt1252Failure = createAction('[Kt1252/API] Load Kt1252 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1252 Page] Save', props<{ ktAtTcalSogutmaYaslandirma: KtAtTcalSogutmaYaslandirma }>());

export const saveKt1252Success = createAction(
  '[Kt1252/API] Save Kt1252 Success',
  props<{ record: KtAtTcalSogutmaYaslandirma }>()
);

export const saveKt1252Failure = createAction('[Kt1252/API] Save Kt1252 Failure', props<{ error: ErrorModel }>());
