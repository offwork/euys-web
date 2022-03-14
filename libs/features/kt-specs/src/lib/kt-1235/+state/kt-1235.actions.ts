/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtIcCapDisCapTolerans } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1235 Page] Init');

export const loadKt1235Success = createAction(
  '[Kt1235/API] Load Kt1235 Success',
  props<{ data: KtAtIcCapDisCapTolerans[] }>()
);

export const loadKt1235Failure = createAction('[Kt1235/API] Load Kt1235 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1235 Page] Save', props<{ ktAtIcCapDisCapTolerans: KtAtIcCapDisCapTolerans }>());

export const saveKt1235Success = createAction(
  '[Kt1235/API] Save Kt1235 Success',
  props<{ record: KtAtIcCapDisCapTolerans }>()
);

export const saveKt1235Failure = createAction('[Kt1235/API] Save Kt1235 Failure', props<{ error: ErrorModel }>());
