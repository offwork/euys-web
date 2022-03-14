/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtAsitlemeTank } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1208 Page] Init');

export const loadKt1208Success = createAction(
  '[Kt1208/API] Load Kt1208 Success',
  props<{ data: KtAtAsitlemeTank[] }>()
);

export const loadKt1208Failure = createAction('[Kt1208/API] Load Kt1208 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1208 Page] Save', props<{ ktAt1AsitlemeTank: KtAtAsitlemeTank }>());

export const saveKt1208Success = createAction(
  '[Kt1208/API] Save Kt1208 Success',
  props<{ record: KtAtAsitlemeTank }>()
);

export const saveKt1208Failure = createAction('[Kt1208/API] Save Kt1208 Failure', props<{ error: ErrorModel }>());
