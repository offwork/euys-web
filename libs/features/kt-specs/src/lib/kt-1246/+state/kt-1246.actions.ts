/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtOzelAgirlik } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1246 Page] Init');

export const loadKt1246Success = createAction(
  '[Kt1246/API] Load Kt1246 Success',
  props<{ data: KtAtOzelAgirlik[] }>()
);

export const loadKt1246Failure = createAction('[Kt1246/API] Load Kt1246 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1246 Page] Save', props<{ ktAtOzelAgirlik: KtAtOzelAgirlik }>());

export const saveKt1246Success = createAction(
  '[Kt1246/API] Save Kt1246 Success',
  props<{ record: KtAtOzelAgirlik }>()
);

export const saveKt1246Failure = createAction('[Kt1246/API] Save Kt1246 Failure', props<{ error: ErrorModel }>());
