/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, props } from '@ngrx/store';
import { ErrorModel, KtAtCgl12TempYuzdeUzama } from '@euys/api-interfaces';

export const init = createAction('[Kt1222 Page] Init');

export const loadKt1222Success = createAction(
  '[Kt1222/API] Load Kt1222 Success',
  props<{ data: KtAtCgl12TempYuzdeUzama[] }>()
);

export const loadKt1222Failure = createAction('[Kt1222/API] Load Kt1222 Failure', props<{ error: ErrorModel }>());

export const save = createAction('[Kt1222 Page] Save', props<{ ktAtCgl12TempYuzdeUzama: KtAtCgl12TempYuzdeUzama }>());

export const saveKt1222Success = createAction(
  '[Kt1222/API] Save Kt1222 Success',
  props<{ record: KtAtCgl12TempYuzdeUzama }>()
);

export const saveKt1222Failure = createAction('[Kt1222/API] Save Kt1222 Failure', props<{ error: ErrorModel }>());
