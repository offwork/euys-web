/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtTincalHattiTemizleme } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1254 Page] Init');

export const loadKt1254Success = createAction(
  '[Kt1254/API] Load Kt1254 Success',
  props<{ data: KtAtTincalHattiTemizleme[] }>()
);

export const loadKt1254Failure = createAction('[Kt1254/API] Load Kt1254 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1254 Page] Save', props<{ ktAtTincalHattiTemizleme: KtAtTincalHattiTemizleme }>());

export const saveKt1254Success = createAction(
  '[Kt1254/API] Save Kt1254 Success',
  props<{ record: KtAtTincalHattiTemizleme }>()
);

export const saveKt1254Failure = createAction('[Kt1254/API] Save Kt1254 Failure', props<{ error: ErrorModel }>());
