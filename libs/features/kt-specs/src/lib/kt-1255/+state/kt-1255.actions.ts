/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtTincalTempYuzdeUzama } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1255 Page] Init');

export const loadKt1255Success = createAction(
  '[Kt1255/API] Load Kt1255 Success',
  props<{ data: KtAtTincalTempYuzdeUzama[] }>()
);

export const loadKt1255Failure = createAction('[Kt1255/API] Load Kt1255 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1255 Page] Save', props<{ ktAtTincalTempYuzdeUzama: KtAtTincalTempYuzdeUzama }>());

export const saveKt1255Success = createAction(
  '[Kt1255/API] Save Kt1255 Success',
  props<{ record: KtAtTincalTempYuzdeUzama }>()
);

export const saveKt1255Failure = createAction('[Kt1255/API] Save Kt1255 Failure', props<{ error: ErrorModel }>());
