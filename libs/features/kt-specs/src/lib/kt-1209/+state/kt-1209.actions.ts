/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel, KtAtAsitlemeTlv } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Kt1209 Page] Init');

export const loadKt1209Success = createAction(
  '[Kt1209/API] Load Kt1209 Success',
  props<{ data: KtAtAsitlemeTlv[] }>()
);

export const loadKt1209Failure = createAction('[Kt1209/API] Load Kt1209 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1209 Page] Save', props<{ ktAt1AsitlemeTlv: KtAtAsitlemeTlv }>());

export const saveKt1209Success = createAction(
  '[Kt1209/API] Save Kt1209 Success',
  props<{ record: KtAtAsitlemeTlv }>()
);

export const saveKt1209Failure = createAction('[Kt1209/API] Save Kt1209 Failure', props<{ error: ErrorModel }>());
