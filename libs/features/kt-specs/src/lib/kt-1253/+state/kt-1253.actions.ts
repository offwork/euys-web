/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtTincalHattiTavlama } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1253 Page] Init');

export const loadKt1253Success = createAction(
  '[Kt1253/API] Load Kt1253 Success',
  props<{ data: KtAtTincalHattiTavlama[] }>()
);

export const loadKt1253Failure = createAction('[Kt1253/API] Load Kt1253 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1253 Page] Save', props<{ ktAtTincalHattiTavlama: KtAtTincalHattiTavlama }>());

export const saveKt1253Success = createAction(
  '[Kt1253/API] Save Kt1253 Success',
  props<{ record: KtAtTincalHattiTavlama }>()
);

export const saveKt1253Failure = createAction('[Kt1253/API] Save Kt1253 Failure', props<{ error: ErrorModel }>());
